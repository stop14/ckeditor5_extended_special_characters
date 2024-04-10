/**
 * @file registers the extendedSpecialCharacters toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import {
  addToolbarToDropdown,
  addListToDropdown,
  ButtonView,
  createDropdown,
  DropdownButtonView,
  Model,
  SplitButtonView,
} from 'ckeditor5/src/ui';
import { Collection } from 'ckeditor5/src/utils';
import icon from '../../../../icons/extendedSpecialCharacters.svg';

export default class ExtendedSpecialCharactersUI extends Plugin {
  init() {
    const editor = this.editor;

    // This will register the extendedSpecialCharacters toolbar button.
    editor.ui.componentFactory.add('extendedSpecialCharacters', (locale) => {
      const dropdownView = createDropdown(locale, SplitButtonView);
      const options = ['🚀','👽','🌟','😀','🤯','🤘'];
      dropdownView.buttonView.actionView.set({
        icon: icon,
        tooltip: true
      });
      //
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

        //def.model.bind('isOn').to(inputCommand,option);
        //  def.model.set( 'commandName', 'paragraph' ); // ??

        items.add( def );

      })

      /*
      items.add({
        type: "button",
        model: new Model({
          withText: true,
          label: "Foo"
        })
      });

      items.add({
        type: "button",
        model: new Model({
          withText: true,
          label: "Bar"
        })
      });
       */
      addListToDropdown(dropdownView, items);

      return dropdownView;
    });
  }
}
