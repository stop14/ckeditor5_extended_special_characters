/**
 * @file registers the ExtendedSpecialCharacters toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/extendedSpecialCharacters.svg';

export default class ExtendedSpecialCharactersUI extends Plugin {
  init() {
    const editor = this.editor;

    // This will register the ExtendedSpecialCharacters toolbar button.
    editor.ui.componentFactory.add('ExtendedSpecialCharacters', (locale) => {
      const command = editor.commands.get('InsertExtendedSpecialCharactersCommand');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Extended Special Characters'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('InsertExtendedSpecialCharactersCommand'),
      );

      return buttonView;
    });
  }
}
