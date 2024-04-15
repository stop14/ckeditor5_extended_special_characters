<?php
declare(strict_types=1);

namespace Drupal\extended_special_characters\Plugin\CKEditor5Plugin;

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
    'options' => ['🚀','👽','🌟','😀','🤯','🤘']
  ];

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return static::DEFAULT_CONFIGURATION;
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state): array {
    $form[static::CONFIG_NAME] = [
      '#type' => 'textarea',
      '#title' => $this->t('Extended Special Characters'),
      '#default_value' => implode(' ', $this->configuration[static::CONFIG_NAME]),
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
    // Match the config schema structure at
    // ckeditor5.plugin.ckeditor5_extended_special_characters_extended_special_characters.
    $options_string = $form_state->getValue(static::CONFIG_NAME);

    if ($options_string !== "") {
      $string_without_extra_spaces = preg_replace('/\s+/', ' ', $options_string);
      $options_array = explode(' ', trim($string_without_extra_spaces));

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

}
