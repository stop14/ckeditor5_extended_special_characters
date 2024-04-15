## CKEditor 5 Extended Special Characters Drupal Module

This module provides a configurable interface to supply a customized list of special characters to CKEditor 5. It also supplies a hook (see extended_special_characters.api.php) to allow module authors to supply their own default list of special characters.

This module is indebted to the authors of the https://www.drupal.org/project/ckeditor_specialchars module for the idea and its CKEditor 4 implementation. It is also indebted to the authors of https://www.drupal.org/project/ckeditor5_dev for the starter template.

A future iteration of this module may fold the configurable characters into CKEditor5’s existing special characters plugin but that was a bridge too far for this time around. It currently provides a separate CKEditor5 widget.

USAGE:

- Enable the module.
- Under Admin > Configuration > Content Authoring > Text Format and Editors configure the format of your choice (e.g. Basic HTML).
- Ensure the Text Editor is CKEditor 5.
- Drag the “🚀” button from Available Buttons to the Active Toolbar
- Under the CKEditor 5 plugin settings / Extended Special Character Set:
  - Add your special characters, separated by a space. 
- Save Configuration.

### Note
It is important that each option have only one character, and that all characters are separated by a space. The module will currently warn you if you have forgotten to separate two characters, but it will allow you to save your character set regardless.

This module was sponsored by the Digital Publishing Cooperative at the University of Virginia.
