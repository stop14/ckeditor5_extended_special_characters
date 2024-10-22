(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CKEditor5"] = factory();
	else
		root["CKEditor5"] = root["CKEditor5"] || {}, root["CKEditor5"]["extendedSpecialCharactersPlugin"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "ckeditor5/src/core.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__("dll-reference CKEditor5.dll"))("./src/core.js");

/***/ }),

/***/ "ckeditor5/src/ui.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__("dll-reference CKEditor5.dll"))("./src/ui.js");

/***/ }),

/***/ "ckeditor5/src/utils.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__("dll-reference CKEditor5.dll"))("./src/utils.js");

/***/ }),

/***/ "dll-reference CKEditor5.dll":
/***/ ((module) => {

"use strict";
module.exports = CKEditor5.dll;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: delegated ./core.js from dll-reference CKEditor5.dll
var delegated_corefrom_dll_reference_CKEditor5 = __webpack_require__("ckeditor5/src/core.js");
// EXTERNAL MODULE: delegated ./ui.js from dll-reference CKEditor5.dll
var delegated_uifrom_dll_reference_CKEditor5 = __webpack_require__("ckeditor5/src/ui.js");
// EXTERNAL MODULE: delegated ./utils.js from dll-reference CKEditor5.dll
var delegated_utilsfrom_dll_reference_CKEditor5 = __webpack_require__("ckeditor5/src/utils.js");
;// ./icons/extendedSpecialCharacters.svg
/* harmony default export */ const extendedSpecialCharacters = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 28.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 20 20\" style=\"enable-background:new 0 0 20 20;\" xml:space=\"preserve\">\n<path d=\"M18,2.3l0-0.5l-0.5,0c0,0,0,0-0.1,0c-0.7,0-4.4,0.2-7.7,3.6C8.8,6.3,8,7.3,7.4,8.2c-2.4-1-5.4,2-5.4,2s2.2-1,3.9,1\n\tc-0.1,0.4-0.2,0.8-0.2,1.1l-0.4,0.5c-0.1,0.1-0.1,0.4,0,0.5l0.1,0.1l-0.3,0.3C5,13.8,5,13.9,5,14c-0.2,0-0.5,0.1-1.2,0.3\n\tc-0.8,0.3-1,1-1,1s0.3,0.1,0.6,0.2c-0.5,0.7-0.4,1.5-0.4,1.5s0.7,0.1,1.5-0.4c0,0.4,0.2,0.7,0.2,0.7s0.7-0.2,1-1\n\tc0.2-0.7,0.4-1,0.3-1.2c0.1,0,0.2,0,0.3,0l0.3-0.3l0.1,0.1c0.1,0.1,0.3,0.1,0.5,0l0.4-0.5c0.3,0,0.7-0.1,1.1-0.2c2,1.7,1,4,1,4\n\ts2.9-3,1.9-5.5c0.9-0.6,1.9-1.5,2.8-2.4C18.1,6.6,18,2.4,18,2.3 M5.7,15.6c-0.2,0.5-0.5,0.5-0.5,0.5S5.1,16,5.1,15.7\n\tc-0.4,0.3-0.9,0.3-0.9,0.3s-0.1-0.5,0.3-0.9C4.2,15.1,4,15,4,15s0.1-0.4,0.5-0.6c0.3-0.1,0.5-0.2,0.6-0.2L5.9,15\n\tC5.9,15.1,5.9,15.3,5.7,15.6 M7.6,13.9c-0.2,0-0.3,0-0.5-0.1l-0.9-0.9c-0.4-1.5,1.2-4.5,3.8-7.1c1.4-1.4,2.9-2.3,4.1-2.8l2.6,2.7\n\tc-0.5,1.3-1.3,2.8-2.7,4.3C11.8,12.4,9.2,13.9,7.6,13.9 M12.7,5.8c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3\n\tc0.7,0,1.3-0.6,1.3-1.3C14,6.4,13.5,5.8,12.7,5.8 M12.7,8.1c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9\n\tC13.6,7.7,13.2,8.1,12.7,8.1 M10.1,8.5c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3C11.4,9.1,10.9,8.5,10.1,8.5\n\t M10.1,10.7c-0.5,0-0.9-0.4-0.9-0.9S9.7,9,10.1,9S11,9.4,11,9.8C11,10.3,10.6,10.7,10.1,10.7 M14,3.2c0.1,0,0.2,0.1,0.2,0.2\n\tS14.1,3.6,14,3.6s-0.2-0.1-0.2-0.2S13.9,3.2,14,3.2z M14.6,3.8c0.1,0,0.2,0.1,0.2,0.2s-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2\n\tS14.5,3.8,14.6,3.8z M15.2,4.4c0.1,0,0.2,0.1,0.2,0.2c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2C15,4.5,15.1,4.4,15.2,4.4z\n\t M15.8,5C15.9,5,16,5.1,16,5.3c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2C15.6,5.1,15.7,5,15.8,5z M16.6,5.7\n\tc-0.1-0.1-0.2-0.1-0.3,0s-0.1,0.2,0,0.3c0.1,0.1,0.2,0.1,0.3,0C16.7,6,16.7,5.8,16.6,5.7\"/>\n</svg>\n");
;// ./js/ckeditor5_plugins/extendedSpecialCharactersPlugin/src/extendedSpecialCharactersUI.js
/**
 * @file registers the extendedSpecialCharacters toolbar button and binds functionality to it.
 */





class ExtendedSpecialCharactersUI extends delegated_corefrom_dll_reference_CKEditor5.Plugin {
  init() {
    const editor = this.editor;


    editor.config.define('extendedSpecialCharacters', {options: []});

    // Register the extendedSpecialCharacters toolbar button.
    editor.ui.componentFactory.add('extendedSpecialCharacters', (locale) => {
      const dropdownView = (0,delegated_uifrom_dll_reference_CKEditor5.createDropdown)(locale, delegated_uifrom_dll_reference_CKEditor5.SplitButtonView);
      //const options = ['🚀','👽','🌟','😀','🤯','🤘'];
      const options = editor.config.get('extendedSpecialCharacters').options;
      const inputCommand = editor.commands.get( 'insertText');

      dropdownView.buttonView.actionView.set({
        label: 'Extended Special characters',
        icon: extendedSpecialCharacters,
        tooltip: true,
      });

      const items = new delegated_utilsfrom_dll_reference_CKEditor5.Collection();

      // Add each option as a dropdown button

      options.forEach((option) => {
        const def = {
          type: 'button',
          model: new delegated_uifrom_dll_reference_CKEditor5.ViewModel( {
            label: option,
            withText: true
          })
        }

        def.model.bind('isOn').to(inputCommand,option);
        def.model.set( 'commandValue', option );

        items.add( def );
      })

      ;(0,delegated_uifrom_dll_reference_CKEditor5.addListToDropdown)(dropdownView, items, {
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

      // Provide a listener that inserts the chosen character when requested.

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

;// ./js/ckeditor5_plugins/extendedSpecialCharactersPlugin/src/extendedSpecialCharacters.js
/**
 * @file Base for the Extended Special Characters plugin
 * Note that no corresponding Editor View plugin is required in this case.
 */




class ExtendedSpecialCharacters extends delegated_corefrom_dll_reference_CKEditor5.Plugin {
  static get requires() {
    return [ExtendedSpecialCharactersUI];
  }
}

;// ./js/ckeditor5_plugins/extendedSpecialCharactersPlugin/src/index.js
/**
 * @file The “glue” file for this plugin.
 *
 */



/* harmony default export */ const src = ({
  ExtendedSpecialCharacters: ExtendedSpecialCharacters,
});

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});