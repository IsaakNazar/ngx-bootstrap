(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-bootstrap/chronos'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/datepicker'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/locale')) :
	typeof define === 'function' && define.amd ? define('ngx-bootstrap', ['exports', 'ngx-bootstrap/chronos', 'ngx-bootstrap/utils', 'ngx-bootstrap/datepicker', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/locale'], factory) :
	(global = global || self, factory(global['ngx-bootstrap'] = {}, global.chronos, global.utils, global.datepicker, global.componentLoader, global.positioning, global.miniNgrx, global.locale));
}(this, (function (exports, chronos, utils, datepicker, componentLoader, positioning, miniNgrx, locale) { 'use strict';

	Object.defineProperty(exports, 'defineLocale', {
		enumerable: true,
		get: function () {
			return chronos.defineLocale;
		}
	});
	Object.defineProperty(exports, 'endOf', {
		enumerable: true,
		get: function () {
			return chronos.endOf;
		}
	});
	Object.defineProperty(exports, 'formatDate', {
		enumerable: true,
		get: function () {
			return chronos.formatDate;
		}
	});
	Object.defineProperty(exports, 'getDay', {
		enumerable: true,
		get: function () {
			return chronos.getDay;
		}
	});
	Object.defineProperty(exports, 'getFirstDayOfMonth', {
		enumerable: true,
		get: function () {
			return chronos.getFirstDayOfMonth;
		}
	});
	Object.defineProperty(exports, 'getFullYear', {
		enumerable: true,
		get: function () {
			return chronos.getFullYear;
		}
	});
	Object.defineProperty(exports, 'getLocale', {
		enumerable: true,
		get: function () {
			return chronos.getLocale;
		}
	});
	Object.defineProperty(exports, 'getMonth', {
		enumerable: true,
		get: function () {
			return chronos.getMonth;
		}
	});
	Object.defineProperty(exports, 'getSetGlobalLocale', {
		enumerable: true,
		get: function () {
			return chronos.getSetGlobalLocale;
		}
	});
	Object.defineProperty(exports, 'isAfter', {
		enumerable: true,
		get: function () {
			return chronos.isAfter;
		}
	});
	Object.defineProperty(exports, 'isArray', {
		enumerable: true,
		get: function () {
			return chronos.isArray;
		}
	});
	Object.defineProperty(exports, 'isBefore', {
		enumerable: true,
		get: function () {
			return chronos.isBefore;
		}
	});
	Object.defineProperty(exports, 'isDate', {
		enumerable: true,
		get: function () {
			return chronos.isDate;
		}
	});
	Object.defineProperty(exports, 'isDateValid', {
		enumerable: true,
		get: function () {
			return chronos.isDateValid;
		}
	});
	Object.defineProperty(exports, 'isFirstDayOfWeek', {
		enumerable: true,
		get: function () {
			return chronos.isFirstDayOfWeek;
		}
	});
	Object.defineProperty(exports, 'isSameDay', {
		enumerable: true,
		get: function () {
			return chronos.isSameDay;
		}
	});
	Object.defineProperty(exports, 'isSameMonth', {
		enumerable: true,
		get: function () {
			return chronos.isSameMonth;
		}
	});
	Object.defineProperty(exports, 'isSameYear', {
		enumerable: true,
		get: function () {
			return chronos.isSameYear;
		}
	});
	Object.defineProperty(exports, 'listLocales', {
		enumerable: true,
		get: function () {
			return chronos.listLocales;
		}
	});
	Object.defineProperty(exports, 'parseDate', {
		enumerable: true,
		get: function () {
			return chronos.parseDate;
		}
	});
	Object.defineProperty(exports, 'setFullDate', {
		enumerable: true,
		get: function () {
			return chronos.setFullDate;
		}
	});
	Object.defineProperty(exports, 'shiftDate', {
		enumerable: true,
		get: function () {
			return chronos.shiftDate;
		}
	});
	Object.defineProperty(exports, 'startOf', {
		enumerable: true,
		get: function () {
			return chronos.startOf;
		}
	});
	Object.defineProperty(exports, 'updateLocale', {
		enumerable: true,
		get: function () {
			return chronos.updateLocale;
		}
	});
	Object.defineProperty(exports, 'LinkedList', {
		enumerable: true,
		get: function () {
			return utils.LinkedList;
		}
	});
	Object.defineProperty(exports, 'OnChange', {
		enumerable: true,
		get: function () {
			return utils.OnChange;
		}
	});
	Object.defineProperty(exports, 'Trigger', {
		enumerable: true,
		get: function () {
			return utils.Trigger;
		}
	});
	Object.defineProperty(exports, 'Utils', {
		enumerable: true,
		get: function () {
			return utils.Utils;
		}
	});
	Object.defineProperty(exports, 'document', {
		enumerable: true,
		get: function () {
			return utils.document;
		}
	});
	Object.defineProperty(exports, 'isBs3', {
		enumerable: true,
		get: function () {
			return utils.isBs3;
		}
	});
	Object.defineProperty(exports, 'listenToTriggersV2', {
		enumerable: true,
		get: function () {
			return utils.listenToTriggersV2;
		}
	});
	Object.defineProperty(exports, 'parseTriggers', {
		enumerable: true,
		get: function () {
			return utils.parseTriggers;
		}
	});
	Object.defineProperty(exports, 'registerOutsideClick', {
		enumerable: true,
		get: function () {
			return utils.registerOutsideClick;
		}
	});
	Object.defineProperty(exports, 'setTheme', {
		enumerable: true,
		get: function () {
			return utils.setTheme;
		}
	});
	Object.defineProperty(exports, 'warnOnce', {
		enumerable: true,
		get: function () {
			return utils.warnOnce;
		}
	});
	Object.defineProperty(exports, 'window', {
		enumerable: true,
		get: function () {
			return utils.window;
		}
	});
	Object.defineProperty(exports, 'BsDatepickerConfig', {
		enumerable: true,
		get: function () {
			return datepicker.BsDatepickerConfig;
		}
	});
	Object.defineProperty(exports, 'BsDatepickerContainerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.BsDatepickerContainerComponent;
		}
	});
	Object.defineProperty(exports, 'BsDatepickerDirective', {
		enumerable: true,
		get: function () {
			return datepicker.BsDatepickerDirective;
		}
	});
	Object.defineProperty(exports, 'BsDatepickerInlineContainerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.BsDatepickerInlineContainerComponent;
		}
	});
	Object.defineProperty(exports, 'BsDatepickerInlineDirective', {
		enumerable: true,
		get: function () {
			return datepicker.BsDatepickerInlineDirective;
		}
	});
	Object.defineProperty(exports, 'BsDatepickerInputDirective', {
		enumerable: true,
		get: function () {
			return datepicker.BsDatepickerInputDirective;
		}
	});
	Object.defineProperty(exports, 'BsDatepickerModule', {
		enumerable: true,
		get: function () {
			return datepicker.BsDatepickerModule;
		}
	});
	Object.defineProperty(exports, 'BsDaterangepickerConfig', {
		enumerable: true,
		get: function () {
			return datepicker.BsDaterangepickerConfig;
		}
	});
	Object.defineProperty(exports, 'BsDaterangepickerContainerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.BsDaterangepickerContainerComponent;
		}
	});
	Object.defineProperty(exports, 'BsDaterangepickerDirective', {
		enumerable: true,
		get: function () {
			return datepicker.BsDaterangepickerDirective;
		}
	});
	Object.defineProperty(exports, 'BsDaterangepickerInputDirective', {
		enumerable: true,
		get: function () {
			return datepicker.BsDaterangepickerInputDirective;
		}
	});
	Object.defineProperty(exports, 'BsLocaleService', {
		enumerable: true,
		get: function () {
			return datepicker.BsLocaleService;
		}
	});
	Object.defineProperty(exports, 'DateFormatter', {
		enumerable: true,
		get: function () {
			return datepicker.DateFormatter;
		}
	});
	Object.defineProperty(exports, 'DatePickerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.DatePickerComponent;
		}
	});
	Object.defineProperty(exports, 'DatePickerInnerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.DatePickerInnerComponent;
		}
	});
	Object.defineProperty(exports, 'DatepickerConfig', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerConfig;
		}
	});
	Object.defineProperty(exports, 'DatepickerModule', {
		enumerable: true,
		get: function () {
			return datepicker.DatepickerModule;
		}
	});
	Object.defineProperty(exports, 'DayPickerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.DayPickerComponent;
		}
	});
	Object.defineProperty(exports, 'MonthPickerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.MonthPickerComponent;
		}
	});
	Object.defineProperty(exports, 'YearPickerComponent', {
		enumerable: true,
		get: function () {
			return datepicker.YearPickerComponent;
		}
	});
	Object.defineProperty(exports, 'BsComponentRef', {
		enumerable: true,
		get: function () {
			return componentLoader.BsComponentRef;
		}
	});
	Object.defineProperty(exports, 'ComponentLoader', {
		enumerable: true,
		get: function () {
			return componentLoader.ComponentLoader;
		}
	});
	Object.defineProperty(exports, 'ComponentLoaderFactory', {
		enumerable: true,
		get: function () {
			return componentLoader.ComponentLoaderFactory;
		}
	});
	Object.defineProperty(exports, 'ContentRef', {
		enumerable: true,
		get: function () {
			return componentLoader.ContentRef;
		}
	});
	Object.defineProperty(exports, 'Positioning', {
		enumerable: true,
		get: function () {
			return positioning.Positioning;
		}
	});
	Object.defineProperty(exports, 'PositioningService', {
		enumerable: true,
		get: function () {
			return positioning.PositioningService;
		}
	});
	Object.defineProperty(exports, 'positionElements', {
		enumerable: true,
		get: function () {
			return positioning.positionElements;
		}
	});
	Object.defineProperty(exports, 'MiniState', {
		enumerable: true,
		get: function () {
			return miniNgrx.MiniState;
		}
	});
	Object.defineProperty(exports, 'MiniStore', {
		enumerable: true,
		get: function () {
			return miniNgrx.MiniStore;
		}
	});
	Object.defineProperty(exports, 'arLocale', {
		enumerable: true,
		get: function () {
			return locale.arLocale;
		}
	});
	Object.defineProperty(exports, 'bgLocale', {
		enumerable: true,
		get: function () {
			return locale.bgLocale;
		}
	});
	Object.defineProperty(exports, 'caLocale', {
		enumerable: true,
		get: function () {
			return locale.caLocale;
		}
	});
	Object.defineProperty(exports, 'csLocale', {
		enumerable: true,
		get: function () {
			return locale.csLocale;
		}
	});
	Object.defineProperty(exports, 'daLocale', {
		enumerable: true,
		get: function () {
			return locale.daLocale;
		}
	});
	Object.defineProperty(exports, 'deLocale', {
		enumerable: true,
		get: function () {
			return locale.deLocale;
		}
	});
	Object.defineProperty(exports, 'enGbLocale', {
		enumerable: true,
		get: function () {
			return locale.enGbLocale;
		}
	});
	Object.defineProperty(exports, 'esDoLocale', {
		enumerable: true,
		get: function () {
			return locale.esDoLocale;
		}
	});
	Object.defineProperty(exports, 'esLocale', {
		enumerable: true,
		get: function () {
			return locale.esLocale;
		}
	});
	Object.defineProperty(exports, 'esUsLocale', {
		enumerable: true,
		get: function () {
			return locale.esUsLocale;
		}
	});
	Object.defineProperty(exports, 'etLocale', {
		enumerable: true,
		get: function () {
			return locale.etLocale;
		}
	});
	Object.defineProperty(exports, 'fiLocale', {
		enumerable: true,
		get: function () {
			return locale.fiLocale;
		}
	});
	Object.defineProperty(exports, 'frLocale', {
		enumerable: true,
		get: function () {
			return locale.frLocale;
		}
	});
	Object.defineProperty(exports, 'glLocale', {
		enumerable: true,
		get: function () {
			return locale.glLocale;
		}
	});
	Object.defineProperty(exports, 'heLocale', {
		enumerable: true,
		get: function () {
			return locale.heLocale;
		}
	});
	Object.defineProperty(exports, 'hiLocale', {
		enumerable: true,
		get: function () {
			return locale.hiLocale;
		}
	});
	Object.defineProperty(exports, 'hrLocale', {
		enumerable: true,
		get: function () {
			return locale.hrLocale;
		}
	});
	Object.defineProperty(exports, 'huLocale', {
		enumerable: true,
		get: function () {
			return locale.huLocale;
		}
	});
	Object.defineProperty(exports, 'idLocale', {
		enumerable: true,
		get: function () {
			return locale.idLocale;
		}
	});
	Object.defineProperty(exports, 'itLocale', {
		enumerable: true,
		get: function () {
			return locale.itLocale;
		}
	});
	Object.defineProperty(exports, 'jaLocale', {
		enumerable: true,
		get: function () {
			return locale.jaLocale;
		}
	});
	Object.defineProperty(exports, 'koLocale', {
		enumerable: true,
		get: function () {
			return locale.koLocale;
		}
	});
	Object.defineProperty(exports, 'ltLocale', {
		enumerable: true,
		get: function () {
			return locale.ltLocale;
		}
	});
	Object.defineProperty(exports, 'lvLocale', {
		enumerable: true,
		get: function () {
			return locale.lvLocale;
		}
	});
	Object.defineProperty(exports, 'mnLocale', {
		enumerable: true,
		get: function () {
			return locale.mnLocale;
		}
	});
	Object.defineProperty(exports, 'nbLocale', {
		enumerable: true,
		get: function () {
			return locale.nbLocale;
		}
	});
	Object.defineProperty(exports, 'nlBeLocale', {
		enumerable: true,
		get: function () {
			return locale.nlBeLocale;
		}
	});
	Object.defineProperty(exports, 'nlLocale', {
		enumerable: true,
		get: function () {
			return locale.nlLocale;
		}
	});
	Object.defineProperty(exports, 'plLocale', {
		enumerable: true,
		get: function () {
			return locale.plLocale;
		}
	});
	Object.defineProperty(exports, 'ptBrLocale', {
		enumerable: true,
		get: function () {
			return locale.ptBrLocale;
		}
	});
	Object.defineProperty(exports, 'roLocale', {
		enumerable: true,
		get: function () {
			return locale.roLocale;
		}
	});
	Object.defineProperty(exports, 'ruLocale', {
		enumerable: true,
		get: function () {
			return locale.ruLocale;
		}
	});
	Object.defineProperty(exports, 'skLocale', {
		enumerable: true,
		get: function () {
			return locale.skLocale;
		}
	});
	Object.defineProperty(exports, 'slLocale', {
		enumerable: true,
		get: function () {
			return locale.slLocale;
		}
	});
	Object.defineProperty(exports, 'svLocale', {
		enumerable: true,
		get: function () {
			return locale.svLocale;
		}
	});
	Object.defineProperty(exports, 'thLocale', {
		enumerable: true,
		get: function () {
			return locale.thLocale;
		}
	});
	Object.defineProperty(exports, 'trLocale', {
		enumerable: true,
		get: function () {
			return locale.trLocale;
		}
	});
	Object.defineProperty(exports, 'ukLocale', {
		enumerable: true,
		get: function () {
			return locale.ukLocale;
		}
	});
	Object.defineProperty(exports, 'viLocale', {
		enumerable: true,
		get: function () {
			return locale.viLocale;
		}
	});
	Object.defineProperty(exports, 'zhCnLocale', {
		enumerable: true,
		get: function () {
			return locale.zhCnLocale;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap.umd.js.map
