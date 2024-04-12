/**
 * @file registers the extendedSpecialCharacters toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import {
  addListToDropdown,
  createDropdown,
  Model,
  SplitButtonView,
} from 'ckeditor5/src/ui';
import { Collection } from 'ckeditor5/src/utils';
import icon from '../../../../icons/extendedSpecialCharacters.svg';
export default class ExtendedSpecialCharactersUI extends Plugin {
  init() {
    const editor = this.editor;

    editor.config.define('extendedSpecialCharacters', {options: ['🚀','👽','🌟','😀','🤯','🤘']});

    // Register the extendedSpecialCharacters toolbar button.
    editor.ui.componentFactory.add('extendedSpecialCharacters', (locale) => {
      const dropdownView = createDropdown(locale, SplitButtonView);
      const options = editor.config.get(extendedSpecialCharacters.options);
      const inputCommand = editor.commands.get( 'insertText');

      dropdownView.buttonView.actionView.set({
        label: 'Extended Special characters',
        icon: icon,
        tooltip: true,
      });

      const items = new Collection();

      options.forEach((option) => {
        console.log(option);
        const def = {
          type: 'button',
          model: new Model( {
            label: option,
            withText: true
          })
        }

        def.model.bind('isOn').to(inputCommand,option);
        def.model.set( 'commandValue', option );

        items.add( def );
      })

      addListToDropdown(dropdownView, items, {
        ariaLabel: "Insert Extended Special Characters",
        role: 'menu'
      }) ;

      dropdownView.extendTemplate( {
        attributes: {
          class: [
            'ck-extended-special-characters'
          ]
        }
      } );

      dropdownView.bind( 'isEnabled' ).to( inputCommand );

      this.listenTo( dropdownView, 'execute', evt => {
        const { commandValue } = evt.source;
        this.editor.model.change((writer) => {
          const insertPosition = this.editor.model.document.selection.getFirstPosition();
          writer.insertText(commandValue, insertPosition);
        });
        editor.editing.view.focus();
      } );

      return dropdownView;
    });
  }
}
