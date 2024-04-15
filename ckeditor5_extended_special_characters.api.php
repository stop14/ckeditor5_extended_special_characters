<?php

/** @file
 *  Examples of available module hooks.
 */

function HOOK_add_extended_special_character_options(&$data) {
  $default_options = ['🚀', '👽', '🌟', '😀', '🤯', '🤘','🔥'];
  $data['options'] = array_merge($data['options'],$default_options);
}
