<?php
declare(strict_types=1);

namespace Drupal\ckeditor5_extended_special_characters\Plugin\CKEditor5Plugin;

use Drupal\ckeditor5\Plugin\CKEditor5PluginConfigurableInterface;
use Drupal\ckeditor5\Plugin\CKEditor5PluginConfigurableTrait;
use Drupal\ckeditor5\Plugin\CKEditor5PluginDefault;
use Drupal\Core\Form\FormStateInterface;
use Drupal\editor\EditorInterface;

/**
 * CKEditor 5 Extended Special Characters plugin configuration.
 *
 */
class CKEditor5ExtendedSpecialCharacters extends CKEditor5PluginDefault implements CKEditor5PluginConfigurableInterface {

  use CKEditor5PluginConfigurableTrait;

  /**
   * The default config name for Extended Special Characters options.
   *
   * @var string
   */
  const CONFIG_NAME = 'options';

  /**
   * The default array of Extended Special Characters options.
   *
   * @var string[][]
   */
  const DEFAULT_CONFIGURATION = [
    'options' => [],
  ];

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {

    // Provide a hook to allow modules to supply/modify default special character options.

    $options = static::DEFAULT_CONFIGURATION;

    \Drupal::moduleHandler()->invokeAll('add_extended_special_character_options', [&$options]);

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state): array {

    // Default options can be supplied via a hook that is triggered via the defaultConfiguration method.

    $default_options = count($this->configuration[static::CONFIG_NAME]) === 0 ? $this->defaultConfiguration() : $this->configuration[static::CONFIG_NAME];

    $form[static::CONFIG_NAME] = [
      '#type' => 'textarea',
      '#title' => $this->t('Extended Special Characters'),
      '#default_value' => implode(' ', $default_options),
      '#description' => $this->t(
        'List special characters to be added to Extended Special Characters CKEditor Widget. Separate each characters with a space.'
      ),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateConfigurationForm(array &$form, FormStateInterface $form_state): void {
    // Matches the config schema structure at
    // ckeditor5.plugin.ckeditor5_ckeditor5_extended_special_characters_extended_special_characters
    $options_string = $form_state->getValue(static::CONFIG_NAME);

    if ($options_string !== "") {
      $string_without_extra_spaces = preg_replace('/\s+/', ' ', $options_string);
      $options_array = explode(' ', trim($string_without_extra_spaces));

      // Ensure that each option has only one character.

      $messenger = \Drupal::messenger();

      /** Warn users when duplicate characters are detected.   */

      if (count($options_array) !== count(array_unique($options_array))) {
        $messenger->addWarning("Extended Special Characters: Duplicate special characters have been detected. Please check your available options.");
      }

      /** Warn users when they've forgotten a space. It is difficult to get a comparible count for multiple
       * character emojis, so users are warned that this may be a false negative.
       */

      foreach($options_array as $option) {
        if ($this->characterLength($option) > 1) {
          //$form_state->setErrorByName('options',"The option “{$option}” has more than one character. You may need to add a space between characters.");

          $messenger->addMessage("Extended Special Characters: The option “{$option}” may have more than one character. You may need to add a space between characters. Note that certain emojis have multiple characters and may erroneously trigger this warning.");
        }
      }

      $form_state->setValue(static::CONFIG_NAME, array_unique($options_array));
    }
    else {
      $form_state->setValue(static::CONFIG_NAME, static::DEFAULT_CONFIGURATION[static::CONFIG_NAME]);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state): void {
    $this->configuration[static::CONFIG_NAME] = $form_state->getValue(static::CONFIG_NAME);
  }

  /**
   * {@inheritdoc}
   */
  public function getDynamicPluginConfig(array $static_plugin_config, EditorInterface $editor): array {
    return [
      'extendedSpecialCharacters' => [
        'options' => $this->configuration[static::CONFIG_NAME],
      ],
    ];
  }

  /** With thanks: https://stackoverflow.com/posts/16853473/revisions */
  private function isMultibyte($string)
  {
    return !mb_check_encoding($string, 'ASCII') && mb_check_encoding($string, 'UTF-8');
  }

  /**
   * @param $string
   *
   * @return int
   *
   * strlen() returns the number of bytes, not the number of characters.
   * This method makes multibyte and single byte characters comparable.
   * @todo: This method fails with multi-character emojis. Look for an
   *   effective way to make the length of multi-character compariable with
   *   multibyte and single byte characters.
   */
  private function characterLength($string) {

    return $this->isMultibyte($string) ? (int) mb_strlen($string) : strlen($string);
  }

}
