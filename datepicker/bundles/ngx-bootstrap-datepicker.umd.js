(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('ngx-bootstrap/chronos'), require('rxjs'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/positioning'), require('@angular/animations'), require('ngx-bootstrap/component-loader'), require('@angular/forms'), require('@angular/common'), require('ngx-bootstrap/utils')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/datepicker', ['exports', '@angular/core', 'rxjs/operators', 'ngx-bootstrap/chronos', 'rxjs', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/positioning', '@angular/animations', 'ngx-bootstrap/component-loader', '@angular/forms', '@angular/common', 'ngx-bootstrap/utils'], factory) :
    (global = global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].datepicker = {}), global.ng.core, global.rxjs.operators, global.chronos, global.rxjs, global.miniNgrx, global.positioning, global.ng.animations, global.componentLoader, global.ng.forms, global.ng.common, global.utils));
}(this, (function (exports, core, operators, chronos, rxjs, miniNgrx, positioning, animations, componentLoader, forms, common, utils) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
     * except `displayMonths`, for range picker it default to `2`
     */
    var BsDatepickerConfig = /** @class */ (function () {
        function BsDatepickerConfig() {
            /**
             * sets use adaptive position
             */
            this.adaptivePosition = false;
            /**
             * sets use UTC date time format
             */
            this.useUtc = false;
            /**
             * turn on/off animation
             */
            this.isAnimated = false;
            /**
             * CSS class which will be applied to datepicker container,
             * usually used to set color theme
             */
            this.containerClass = 'theme-green';
            // DatepickerRenderOptions
            this.displayMonths = 1;
            /**
             * Allows to hide week numbers in datepicker
             */
            this.showWeekNumbers = false;
            this.dateInputFormat = 'L';
            // range picker
            this.rangeSeparator = ' - ';
            /**
             * Date format for date range input field
             */
            this.rangeInputFormat = 'L';
            // DatepickerFormatOptions
            this.monthTitle = 'MMMM';
            this.yearTitle = 'YYYY';
            this.dayLabel = 'D';
            this.monthLabel = 'MMMM';
            this.yearLabel = 'YYYY';
            this.weekNumbers = 'w';
        }
        BsDatepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var   /**
     * @abstract
     */
    BsDatepickerAbstractComponent = /** @class */ (function () {
        function BsDatepickerAbstractComponent() {
            this._customRangesFish = [];
        }
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setMinDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setMaxDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setDaysDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setDatesDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateCustomClasses", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setDateCustomClasses(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.setViewMode = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
        function (day) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
         * @param {?} event
         * @return {?}
         */
        function (event) { };
        /* tslint:disable-next-line: no-any */
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerAbstractComponent.prototype._stopPropagation = /* tslint:disable-next-line: no-any */
        /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
        };
        return BsDatepickerAbstractComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerActions = /** @class */ (function () {
        function BsDatepickerActions() {
        }
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.calculate = /**
         * @return {?}
         */
        function () {
            return { type: BsDatepickerActions.CALCULATE };
        };
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.format = /**
         * @return {?}
         */
        function () {
            return { type: BsDatepickerActions.FORMAT };
        };
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.flag = /**
         * @return {?}
         */
        function () {
            return { type: BsDatepickerActions.FLAG };
        };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.select = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return {
                type: BsDatepickerActions.SELECT,
                payload: date
            };
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return {
                type: BsDatepickerActions.CHANGE_VIEWMODE,
                payload: event
            };
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return {
                type: BsDatepickerActions.NAVIGATE_TO,
                payload: event
            };
        };
        /**
         * @param {?} step
         * @return {?}
         */
        BsDatepickerActions.prototype.navigateStep = /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            return {
                type: BsDatepickerActions.NAVIGATE_OFFSET,
                payload: step
            };
        };
        /**
         * @param {?} options
         * @return {?}
         */
        BsDatepickerActions.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return {
                type: BsDatepickerActions.SET_OPTIONS,
                payload: options
            };
        };
        // date range picker
        // date range picker
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerActions.prototype.selectRange = 
        // date range picker
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return {
                type: BsDatepickerActions.SELECT_RANGE,
                payload: value
            };
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.hoverDay = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return {
                type: BsDatepickerActions.HOVER,
                payload: event.isHovered ? event.cell.date : null
            };
        };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.minDate = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return {
                type: BsDatepickerActions.SET_MIN_DATE,
                payload: date
            };
        };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.maxDate = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return {
                type: BsDatepickerActions.SET_MAX_DATE,
                payload: date
            };
        };
        /**
         * @param {?} days
         * @return {?}
         */
        BsDatepickerActions.prototype.daysDisabled = /**
         * @param {?} days
         * @return {?}
         */
        function (days) {
            return {
                type: BsDatepickerActions.SET_DAYSDISABLED,
                payload: days
            };
        };
        /**
         * @param {?} dates
         * @return {?}
         */
        BsDatepickerActions.prototype.datesDisabled = /**
         * @param {?} dates
         * @return {?}
         */
        function (dates) {
            return {
                type: BsDatepickerActions.SET_DATESDISABLED,
                payload: dates
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerActions.prototype.isDisabled = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return {
                type: BsDatepickerActions.SET_IS_DISABLED,
                payload: value
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerActions.prototype.setDateCustomClasses = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return {
                type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
                payload: value
            };
        };
        /**
         * @param {?} locale
         * @return {?}
         */
        BsDatepickerActions.prototype.setLocale = /**
         * @param {?} locale
         * @return {?}
         */
        function (locale) {
            return {
                type: BsDatepickerActions.SET_LOCALE,
                payload: locale
            };
        };
        BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
        BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
        BsDatepickerActions.FLAG = '[datepicker] set flags';
        BsDatepickerActions.SELECT = '[datepicker] select date';
        BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
        BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
        BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
        BsDatepickerActions.HOVER = '[datepicker] hover date';
        BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
        BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
        BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
        BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
        BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
        BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
        BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
        BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
        BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
        BsDatepickerActions.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerActions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsLocaleService = /** @class */ (function () {
        function BsLocaleService() {
            this._defaultLocale = 'en';
            this._locale = new rxjs.BehaviorSubject(this._defaultLocale);
            this._localeChange = this._locale.asObservable();
        }
        Object.defineProperty(BsLocaleService.prototype, "locale", {
            get: /**
             * @return {?}
             */
            function () {
                return this._locale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "localeChange", {
            get: /**
             * @return {?}
             */
            function () {
                return this._localeChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
            get: /**
             * @return {?}
             */
            function () {
                return this._locale.getValue();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} locale
         * @return {?}
         */
        BsLocaleService.prototype.use = /**
         * @param {?} locale
         * @return {?}
         */
        function (locale) {
            if (locale === this.currentLocale) {
                return;
            }
            this._locale.next(locale);
        };
        BsLocaleService.decorators = [
            { type: core.Injectable }
        ];
        return BsLocaleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerEffects = /** @class */ (function () {
        function BsDatepickerEffects(_actions, _localeService) {
            this._actions = _actions;
            this._localeService = _localeService;
            this._subs = [];
        }
        /**
         * @param {?} _bsDatepickerStore
         * @return {?}
         */
        BsDatepickerEffects.prototype.init = /**
         * @param {?} _bsDatepickerStore
         * @return {?}
         */
        function (_bsDatepickerStore) {
            this._store = _bsDatepickerStore;
            return this;
        };
        /** setters */
        /**
         * setters
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setValue = /**
         * setters
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._store.dispatch(this._actions.select(value));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setRangeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._store.dispatch(this._actions.selectRange(value));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setMinDate = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._store.dispatch(this._actions.minDate(value));
            return this;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setMaxDate = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._store.dispatch(this._actions.maxDate(value));
            return this;
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} value
         * @return {THIS}
         */
        BsDatepickerEffects.prototype.setDaysDisabled = /**
         * @template THIS
         * @this {THIS}
         * @param {?} value
         * @return {THIS}
         */
        function (value) {
            (/** @type {?} */ (this))._store.dispatch((/** @type {?} */ (this))._actions.daysDisabled(value));
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} value
         * @return {THIS}
         */
        BsDatepickerEffects.prototype.setDatesDisabled = /**
         * @template THIS
         * @this {THIS}
         * @param {?} value
         * @return {THIS}
         */
        function (value) {
            (/** @type {?} */ (this))._store.dispatch((/** @type {?} */ (this))._actions.datesDisabled(value));
            return (/** @type {?} */ (this));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setDisabled = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._store.dispatch(this._actions.isDisabled(value));
            return this;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setDateCustomClasses = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._store.dispatch(this._actions.setDateCustomClasses(value));
            return this;
        };
        /* Set rendering options */
        /* Set rendering options */
        /**
         * @param {?} _config
         * @return {?}
         */
        BsDatepickerEffects.prototype.setOptions = /* Set rendering options */
        /**
         * @param {?} _config
         * @return {?}
         */
        function (_config) {
            /** @type {?} */
            var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
            this._store.dispatch(this._actions.setOptions(_options));
            return this;
        };
        /** view to mode bindings */
        /**
         * view to mode bindings
         * @param {?} container
         * @return {?}
         */
        BsDatepickerEffects.prototype.setBindings = /**
         * view to mode bindings
         * @param {?} container
         * @return {?}
         */
        function (container) {
            container.daysCalendar = this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.flaggedMonths; }))
                .pipe(operators.filter((/**
             * @param {?} months
             * @return {?}
             */
            function (months) { return !!months; })));
            // month calendar
            container.monthsCalendar = this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.flaggedMonthsCalendar; }))
                .pipe(operators.filter((/**
             * @param {?} months
             * @return {?}
             */
            function (months) { return !!months; })));
            // year calendar
            container.yearsCalendar = this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.yearsCalendarFlagged; }))
                .pipe(operators.filter((/**
             * @param {?} years
             * @return {?}
             */
            function (years) { return !!years; })));
            container.viewMode = this._store.select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.view.mode; }));
            container.options = this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.showWeekNumbers; }))
                .pipe(operators.map((/**
             * @param {?} showWeekNumbers
             * @return {?}
             */
            function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); })));
            return this;
        };
        /** event handlers */
        /**
         * event handlers
         * @param {?} container
         * @return {?}
         */
        BsDatepickerEffects.prototype.setEventHandlers = /**
         * event handlers
         * @param {?} container
         * @return {?}
         */
        function (container) {
            var _this = this;
            container.setViewMode = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this._store.dispatch(_this._actions.changeViewMode(event));
            });
            container.navigateTo = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this._store.dispatch(_this._actions.navigateStep(event.step));
            });
            container.dayHoverHandler = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var _cell = (/** @type {?} */ (event.cell));
                if (_cell.isOtherMonth || _cell.isDisabled) {
                    return;
                }
                _this._store.dispatch(_this._actions.hoverDay(event));
                _cell.isHovered = event.isHovered;
            });
            container.monthHoverHandler = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.cell.isHovered = event.isHovered;
            });
            container.yearHoverHandler = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.cell.isHovered = event.isHovered;
            });
            container.monthSelectHandler = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.isDisabled) {
                    return;
                }
                _this._store.dispatch(_this._actions.navigateTo({
                    unit: {
                        month: chronos.getMonth(event.date),
                        year: chronos.getFullYear(event.date)
                    },
                    viewMode: 'day'
                }));
            });
            container.yearSelectHandler = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.isDisabled) {
                    return;
                }
                _this._store.dispatch(_this._actions.navigateTo({
                    unit: {
                        year: chronos.getFullYear(event.date)
                    },
                    viewMode: 'month'
                }));
            });
            return this;
        };
        /**
         * @return {?}
         */
        BsDatepickerEffects.prototype.registerDatepickerSideEffects = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._subs.push(this._store.select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.view; })).subscribe((/**
             * @param {?} view
             * @return {?}
             */
            function (view) {
                _this._store.dispatch(_this._actions.calculate());
            })));
            // format calendar values on month model change
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.monthsModel; }))
                .pipe(operators.filter((/**
             * @param {?} monthModel
             * @return {?}
             */
            function (monthModel) { return !!monthModel; })))
                .subscribe((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return _this._store.dispatch(_this._actions.format()); })));
            // flag day values
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.formattedMonths; }))
                .pipe(operators.filter((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return !!month; })))
                .subscribe((/**
             * @param {?} month
             * @return {?}
             */
            function (month) { return _this._store.dispatch(_this._actions.flag()); })));
            // flag day values
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.selectedDate; }))
                .pipe(operators.filter((/**
             * @param {?} selectedDate
             * @return {?}
             */
            function (selectedDate) { return !!selectedDate; })))
                .subscribe((/**
             * @param {?} selectedDate
             * @return {?}
             */
            function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); })));
            // flag for date range picker
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.selectedRange; }))
                .pipe(operators.filter((/**
             * @param {?} selectedRange
             * @return {?}
             */
            function (selectedRange) { return !!selectedRange; })))
                .subscribe((/**
             * @param {?} selectedRange
             * @return {?}
             */
            function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); })));
            // monthsCalendar
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.monthsCalendar; }))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._store.dispatch(_this._actions.flag()); })));
            // years calendar
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.yearsCalendarModel; }))
                .pipe(operators.filter((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return !!state; })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._store.dispatch(_this._actions.flag()); })));
            // on hover
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.hoveredDate; }))
                .pipe(operators.filter((/**
             * @param {?} hoveredDate
             * @return {?}
             */
            function (hoveredDate) { return !!hoveredDate; })))
                .subscribe((/**
             * @param {?} hoveredDate
             * @return {?}
             */
            function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); })));
            // date custom classes
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.dateCustomClasses; }))
                .pipe(operators.filter((/**
             * @param {?} dateCustomClasses
             * @return {?}
             */
            function (dateCustomClasses) { return !!dateCustomClasses; })))
                .subscribe((/**
             * @param {?} dateCustomClasses
             * @return {?}
             */
            function (dateCustomClasses) { return _this._store.dispatch(_this._actions.flag()); })));
            // on locale change
            this._subs.push(this._localeService.localeChange
                .subscribe((/**
             * @param {?} locale
             * @return {?}
             */
            function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); })));
            return this;
        };
        /**
         * @return {?}
         */
        BsDatepickerEffects.prototype.destroy = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        BsDatepickerEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerEffects.ctorParameters = function () { return [
            { type: BsDatepickerActions },
            { type: BsLocaleService }
        ]; };
        return BsDatepickerEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultMonthOptions = {
        width: 7,
        height: 6
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var _initialView = { date: new Date(), mode: 'day' };
    /** @type {?} */
    var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
        locale: 'en',
        view: _initialView,
        selectedRange: [],
        monthViewOptions: defaultMonthOptions
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    function getStartingDayOfCalendar(date, options) {
        if (chronos.isFirstDayOfWeek(date, options.firstDayOfWeek)) {
            return date;
        }
        /** @type {?} */
        var weekDay = chronos.getDay(date);
        /** @type {?} */
        var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
        return chronos.shiftDate(date, { day: -offset });
    }
    /**
     * @param {?} weekday
     * @param {?} startingDayOffset
     * @return {?}
     */
    function calculateDateOffset(weekday, startingDayOffset) {
        if (startingDayOffset === 0) {
            return weekday;
        }
        /** @type {?} */
        var offset = weekday - startingDayOffset % 7;
        return offset < 0 ? offset + 7 : offset;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function isMonthDisabled(date, min, max) {
        /** @type {?} */
        var minBound = min && chronos.isBefore(chronos.endOf(date, 'month'), min, 'day');
        /** @type {?} */
        var maxBound = max && chronos.isAfter(chronos.startOf(date, 'month'), max, 'day');
        return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function isYearDisabled(date, min, max) {
        /** @type {?} */
        var minBound = min && chronos.isBefore(chronos.endOf(date, 'year'), min, 'day');
        /** @type {?} */
        var maxBound = max && chronos.isAfter(chronos.startOf(date, 'year'), max, 'day');
        return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} datesDisabled
     * @return {?}
     */
    function isDisabledDate(date, datesDisabled) {
        if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
            return false;
        }
        return datesDisabled.some((/**
         * @param {?} dateDisabled
         * @return {?}
         */
        function (dateDisabled) { return chronos.isSame(date, dateDisabled, 'date'); }));
    }
    /**
     * @param {?} state
     * @param {?=} calendarIndex
     * @return {?}
     */
    function getYearsCalendarInitialDate(state, calendarIndex) {
        if (calendarIndex === void 0) { calendarIndex = 0; }
        /** @type {?} */
        var model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
        return model && model.years && model.years[0] && model.years[0][0] && model.years[0][0].date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} options
     * @param {?} fn
     * @return {?}
     */
    function createMatrix(options, fn) {
        /** @type {?} */
        var prevValue = options.initialDate;
        /** @type {?} */
        var matrix = new Array(options.height);
        for (var i = 0; i < options.height; i++) {
            matrix[i] = new Array(options.width);
            for (var j = 0; j < options.width; j++) {
                matrix[i][j] = fn(prevValue);
                prevValue = chronos.shiftDate(prevValue, options.shift);
            }
        }
        return matrix;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} startingDate
     * @param {?} options
     * @return {?}
     */
    function calcDaysCalendar(startingDate, options) {
        /** @type {?} */
        var firstDay = chronos.getFirstDayOfMonth(startingDate);
        /** @type {?} */
        var initialDate = getStartingDayOfCalendar(firstDay, options);
        /** @type {?} */
        var matrixOptions = {
            width: options.width,
            height: options.height,
            initialDate: initialDate,
            shift: { day: 1 }
        };
        /** @type {?} */
        var daysMatrix = createMatrix(matrixOptions, (/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return date; }));
        return {
            daysMatrix: daysMatrix,
            month: firstDay
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} daysCalendar
     * @param {?} formatOptions
     * @param {?} monthIndex
     * @return {?}
     */
    function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
        return {
            month: daysCalendar.month,
            monthTitle: chronos.formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
            yearTitle: chronos.formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
            weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
            weekdays: getShiftedWeekdays(formatOptions.locale),
            weeks: daysCalendar.daysMatrix.map((/**
             * @param {?} week
             * @param {?} weekIndex
             * @return {?}
             */
            function (week, weekIndex) { return ({
                days: week.map((/**
                 * @param {?} date
                 * @param {?} dayIndex
                 * @return {?}
                 */
                function (date, dayIndex) { return ({
                    date: date,
                    label: chronos.formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                    monthIndex: monthIndex,
                    weekIndex: weekIndex,
                    dayIndex: dayIndex
                }); }))
            }); }))
        };
    }
    /**
     * @param {?} daysMatrix
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    function getWeekNumbers(daysMatrix, format, locale) {
        return daysMatrix.map((/**
         * @param {?} days
         * @return {?}
         */
        function (days) { return (days[0] ? chronos.formatDate(days[0], format, locale) : ''); }));
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    function getShiftedWeekdays(locale) {
        /** @type {?} */
        var _locale = chronos.getLocale(locale);
        /** @type {?} */
        var weekdays = (/** @type {?} */ (_locale.weekdaysShort()));
        /** @type {?} */
        var firstDayOfWeek = _locale.firstDayOfWeek();
        return __spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} formattedMonth
     * @param {?} options
     * @return {?}
     */
    function flagDaysCalendar(formattedMonth, options) {
        formattedMonth.weeks.forEach((/**
         * @param {?} week
         * @return {?}
         */
        function (week) {
            /* tslint:disable-next-line: cyclomatic-complexity */
            week.days.forEach((/**
             * @param {?} day
             * @param {?} dayIndex
             * @return {?}
             */
            function (day, dayIndex) {
                // datepicker
                /** @type {?} */
                var isOtherMonth = !chronos.isSameMonth(day.date, formattedMonth.month);
                /** @type {?} */
                var isHovered = !isOtherMonth && chronos.isSameDay(day.date, options.hoveredDate);
                // date range picker
                /** @type {?} */
                var isSelectionStart = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[0]);
                /** @type {?} */
                var isSelectionEnd = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[1]);
                /** @type {?} */
                var isSelected = (!isOtherMonth && chronos.isSameDay(day.date, options.selectedDate)) ||
                    isSelectionStart ||
                    isSelectionEnd;
                /** @type {?} */
                var isInRange = !isOtherMonth &&
                    options.selectedRange &&
                    isDateInRange(day.date, options.selectedRange, options.hoveredDate);
                /** @type {?} */
                var isDisabled = options.isDisabled ||
                    chronos.isBefore(day.date, options.minDate, 'day') ||
                    chronos.isAfter(day.date, options.maxDate, 'day') ||
                    chronos.isDisabledDay(day.date, options.daysDisabled) ||
                    isDisabledDate(day.date, options.datesDisabled);
                /** @type {?} */
                var currentDate = new Date();
                /** @type {?} */
                var isToday = !isOtherMonth && chronos.isSameDay(day.date, currentDate);
                /** @type {?} */
                var customClasses = options.dateCustomClasses && options.dateCustomClasses
                    .map((/**
                 * @param {?} dcc
                 * @return {?}
                 */
                function (dcc) { return chronos.isSameDay(day.date, dcc.date) ? dcc.classes : []; }))
                    .reduce((/**
                 * @param {?} previousValue
                 * @param {?} currentValue
                 * @return {?}
                 */
                function (previousValue, currentValue) { return previousValue.concat(currentValue); }), [])
                    .join(' ')
                    || '';
                // decide update or not
                /** @type {?} */
                var newDay = Object.assign({}, day, {
                    isOtherMonth: isOtherMonth,
                    isHovered: isHovered,
                    isSelected: isSelected,
                    isSelectionStart: isSelectionStart,
                    isSelectionEnd: isSelectionEnd,
                    isInRange: isInRange,
                    isDisabled: isDisabled,
                    isToday: isToday,
                    customClasses: customClasses
                });
                if (day.isOtherMonth !== newDay.isOtherMonth ||
                    day.isHovered !== newDay.isHovered ||
                    day.isSelected !== newDay.isSelected ||
                    day.isSelectionStart !== newDay.isSelectionStart ||
                    day.isSelectionEnd !== newDay.isSelectionEnd ||
                    day.isDisabled !== newDay.isDisabled ||
                    day.isInRange !== newDay.isInRange ||
                    day.customClasses !== newDay.customClasses) {
                    week.days[dayIndex] = newDay;
                }
            }));
        }));
        // todo: add check for linked calendars
        formattedMonth.hideLeftArrow =
            options.isDisabled ||
                (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
        formattedMonth.hideRightArrow =
            options.isDisabled ||
                (options.monthIndex < options.displayMonths &&
                    options.monthIndex + 1 !== options.displayMonths);
        formattedMonth.disableLeftArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
        formattedMonth.disableRightArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
        return formattedMonth;
    }
    /**
     * @param {?} date
     * @param {?} selectedRange
     * @param {?} hoveredDate
     * @return {?}
     */
    function isDateInRange(date, selectedRange, hoveredDate) {
        if (!date || !selectedRange[0]) {
            return false;
        }
        if (selectedRange[1]) {
            return date > selectedRange[0] && date <= selectedRange[1];
        }
        if (hoveredDate) {
            return date > selectedRange[0] && date <= hoveredDate;
        }
        return false;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} mode
     * @param {?=} minMode
     * @return {?}
     */
    function canSwitchMode(mode, minMode) {
        return minMode ? mode >= minMode : true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var height = 4;
    /** @type {?} */
    var width = 3;
    /** @type {?} */
    var shift = { month: 1 };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @return {?}
     */
    function formatMonthsCalendar(viewDate, formatOptions) {
        /** @type {?} */
        var initialDate = chronos.startOf(viewDate, 'year');
        /** @type {?} */
        var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
        /** @type {?} */
        var monthMatrix = createMatrix(matrixOptions, (/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return ({
            date: date,
            label: chronos.formatDate(date, formatOptions.monthLabel, formatOptions.locale)
        }); }));
        return {
            months: monthMatrix,
            monthTitle: '',
            yearTitle: chronos.formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} monthCalendar
     * @param {?} options
     * @return {?}
     */
    function flagMonthsCalendar(monthCalendar, options) {
        monthCalendar.months.forEach((/**
         * @param {?} months
         * @param {?} rowIndex
         * @return {?}
         */
        function (months, rowIndex) {
            months.forEach((/**
             * @param {?} month
             * @param {?} monthIndex
             * @return {?}
             */
            function (month, monthIndex) {
                /** @type {?} */
                var isHovered = chronos.isSameMonth(month.date, options.hoveredMonth);
                /** @type {?} */
                var isDisabled = options.isDisabled ||
                    isMonthDisabled(month.date, options.minDate, options.maxDate);
                /** @type {?} */
                var isSelected = chronos.isSameMonth(month.date, options.selectedDate);
                /** @type {?} */
                var newMonth = Object.assign(/*{},*/ month, {
                    isHovered: isHovered,
                    isDisabled: isDisabled,
                    isSelected: isSelected
                });
                if (month.isHovered !== newMonth.isHovered ||
                    month.isDisabled !== newMonth.isDisabled ||
                    month.isSelected !== newMonth.isSelected) {
                    monthCalendar.months[rowIndex][monthIndex] = newMonth;
                }
            }));
        }));
        // todo: add check for linked calendars
        monthCalendar.hideLeftArrow =
            options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
        monthCalendar.hideRightArrow =
            options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths;
        monthCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        monthCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
        return monthCalendar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var height$1 = 4;
    /** @type {?} */
    var width$1 = 4;
    /** @type {?} */
    var yearsPerCalendar = height$1 * width$1;
    /** @type {?} */
    var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
    /** @type {?} */
    var shift$1 = { year: 1 };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @param {?=} previousInitialDate
     * @return {?}
     */
    function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
        /** @type {?} */
        var initialDate = calculateInitialDate(viewDate, previousInitialDate);
        /** @type {?} */
        var matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
        /** @type {?} */
        var yearsMatrix = createMatrix(matrixOptions, (/**
         * @param {?} date
         * @return {?}
         */
        function (date) { return ({
            date: date,
            label: chronos.formatDate(date, formatOptions.yearLabel, formatOptions.locale)
        }); }));
        /** @type {?} */
        var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
        return {
            years: yearsMatrix,
            monthTitle: '',
            yearTitle: yearTitle
        };
    }
    /**
     * @param {?} viewDate
     * @param {?=} previousInitialDate
     * @return {?}
     */
    function calculateInitialDate(viewDate, previousInitialDate) {
        if (previousInitialDate
            && viewDate.getFullYear() >= previousInitialDate.getFullYear()
            && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
            return previousInitialDate;
        }
        return chronos.shiftDate(viewDate, { year: initialYearShift });
    }
    /**
     * @param {?} yearsMatrix
     * @param {?} formatOptions
     * @return {?}
     */
    function formatYearRangeTitle(yearsMatrix, formatOptions) {
        /** @type {?} */
        var from = chronos.formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
        /** @type {?} */
        var to = chronos.formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
        return from + " - " + to;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} yearsCalendar
     * @param {?} options
     * @return {?}
     */
    function flagYearsCalendar(yearsCalendar, options) {
        yearsCalendar.years.forEach((/**
         * @param {?} years
         * @param {?} rowIndex
         * @return {?}
         */
        function (years, rowIndex) {
            years.forEach((/**
             * @param {?} year
             * @param {?} yearIndex
             * @return {?}
             */
            function (year, yearIndex) {
                /** @type {?} */
                var isHovered = chronos.isSameYear(year.date, options.hoveredYear);
                /** @type {?} */
                var isDisabled = options.isDisabled ||
                    isYearDisabled(year.date, options.minDate, options.maxDate);
                /** @type {?} */
                var isSelected = chronos.isSameYear(year.date, options.selectedDate);
                /** @type {?} */
                var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled, isSelected: isSelected });
                if (year.isHovered !== newMonth.isHovered ||
                    year.isDisabled !== newMonth.isDisabled ||
                    year.isSelected !== newMonth.isSelected) {
                    yearsCalendar.years[rowIndex][yearIndex] = newMonth;
                }
            }));
        }));
        // todo: add check for linked calendars
        yearsCalendar.hideLeftArrow =
            options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
        yearsCalendar.hideRightArrow =
            options.yearIndex < options.displayMonths &&
                options.yearIndex + 1 !== options.displayMonths;
        yearsCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        /** @type {?} */
        var i = yearsCalendar.years.length - 1;
        /** @type {?} */
        var j = yearsCalendar.years[i].length - 1;
        yearsCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
        return yearsCalendar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function bsDatepickerReducer(state, action) {
        if (state === void 0) { state = initialDatepickerState; }
        switch (action.type) {
            case BsDatepickerActions.CALCULATE: {
                return calculateReducer(state);
            }
            case BsDatepickerActions.FORMAT: {
                return formatReducer(state);
            }
            case BsDatepickerActions.FLAG: {
                return flagReducer(state);
            }
            case BsDatepickerActions.NAVIGATE_OFFSET: {
                return navigateOffsetReducer(state, action);
            }
            case BsDatepickerActions.NAVIGATE_TO: {
                /** @type {?} */
                var payload = action.payload;
                /** @type {?} */
                var date = chronos.setFullDate(state.view.date, payload.unit);
                /** @type {?} */
                var newState = void 0;
                /** @type {?} */
                var mode = void 0;
                if (canSwitchMode(payload.viewMode, state.minMode)) {
                    mode = payload.viewMode;
                    newState = { view: { date: date, mode: mode } };
                }
                else {
                    mode = state.view.mode;
                    newState = { selectedDate: date, view: { date: date, mode: mode } };
                }
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.CHANGE_VIEWMODE: {
                if (!canSwitchMode(action.payload, state.minMode)) {
                    return state;
                }
                /** @type {?} */
                var date = state.view.date;
                /** @type {?} */
                var mode = action.payload;
                /** @type {?} */
                var newState = { view: { date: date, mode: mode } };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.HOVER: {
                return Object.assign({}, state, { hoveredDate: action.payload });
            }
            case BsDatepickerActions.SELECT: {
                /** @type {?} */
                var newState = {
                    selectedDate: action.payload,
                    view: state.view
                };
                /** @type {?} */
                var mode = state.view.mode;
                /** @type {?} */
                var _date = action.payload || state.view.date;
                /** @type {?} */
                var date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_OPTIONS: {
                /** @type {?} */
                var newState = action.payload;
                // preserve view mode
                /** @type {?} */
                var mode = newState.minMode ? newState.minMode : state.view.mode;
                /** @type {?} */
                var _viewDate = chronos.isDateValid(newState.value) && newState.value
                    || chronos.isArray(newState.value) && chronos.isDateValid(newState.value[0]) && newState.value[0]
                    || state.view.date;
                /** @type {?} */
                var date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
                newState.view = { mode: mode, date: date };
                // update selected value
                if (newState.value) {
                    // if new value is array we work with date range
                    if (chronos.isArray(newState.value)) {
                        newState.selectedRange = newState.value;
                    }
                    // if new value is a date -> datepicker
                    if (newState.value instanceof Date) {
                        newState.selectedDate = newState.value;
                    }
                    // provided value is not supported :)
                    // need to report it somehow
                }
                return Object.assign({}, state, newState);
            }
            // date range picker
            case BsDatepickerActions.SELECT_RANGE: {
                /** @type {?} */
                var newState = {
                    selectedRange: action.payload,
                    view: state.view
                };
                /** @type {?} */
                var mode = state.view.mode;
                /** @type {?} */
                var _date = action.payload && action.payload[0] || state.view.date;
                /** @type {?} */
                var date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_MIN_DATE: {
                return Object.assign({}, state, {
                    minDate: action.payload
                });
            }
            case BsDatepickerActions.SET_MAX_DATE: {
                return Object.assign({}, state, {
                    maxDate: action.payload
                });
            }
            case BsDatepickerActions.SET_IS_DISABLED: {
                return Object.assign({}, state, {
                    isDisabled: action.payload
                });
            }
            case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
                return Object.assign({}, state, {
                    dateCustomClasses: action.payload
                });
            }
            default:
                return state;
        }
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function calculateReducer(state) {
        // how many calendars
        /** @type {?} */
        var displayMonths = state.displayMonths;
        // use selected date on initial rendering if set
        /** @type {?} */
        var viewDate = state.view.date;
        if (state.view.mode === 'day') {
            state.monthViewOptions.firstDayOfWeek = chronos.getLocale(state.locale).firstDayOfWeek();
            /** @type {?} */
            var monthsModel = new Array(displayMonths);
            for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
                viewDate = chronos.shiftDate(viewDate, { month: 1 });
            }
            return Object.assign({}, state, { monthsModel: monthsModel });
        }
        if (state.view.mode === 'month') {
            /** @type {?} */
            var monthsCalendar = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            /** @type {?} */
            var yearsCalendarModel = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === 'year' ? getYearsCalendarInitialDate(state, calendarIndex) : undefined);
                viewDate = chronos.shiftDate(viewDate, { year: yearsPerCalendar });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function formatReducer(state, action) {
        if (state.view.mode === 'day') {
            /** @type {?} */
            var formattedMonths = state.monthsModel.map((/**
             * @param {?} month
             * @param {?} monthIndex
             * @return {?}
             */
            function (month, monthIndex) {
                return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
            }));
            return Object.assign({}, state, { formattedMonths: formattedMonths });
        }
        // how many calendars
        /** @type {?} */
        var displayMonths = state.displayMonths;
        // check initial rendering
        // use selected date on initial rendering if set
        /** @type {?} */
        var viewDate = state.view.date;
        if (state.view.mode === 'month') {
            /** @type {?} */
            var monthsCalendar = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            /** @type {?} */
            var yearsCalendarModel = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 16 });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function flagReducer(state, action) {
        if (state.view.mode === 'day') {
            /** @type {?} */
            var flaggedMonths = state.formattedMonths.map((/**
             * @param {?} formattedMonth
             * @param {?} monthIndex
             * @return {?}
             */
            function (formattedMonth, monthIndex) {
                return flagDaysCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    daysDisabled: state.daysDisabled,
                    datesDisabled: state.datesDisabled,
                    hoveredDate: state.hoveredDate,
                    selectedDate: state.selectedDate,
                    selectedRange: state.selectedRange,
                    displayMonths: state.displayMonths,
                    dateCustomClasses: state.dateCustomClasses,
                    monthIndex: monthIndex
                });
            }));
            return Object.assign({}, state, { flaggedMonths: flaggedMonths });
        }
        if (state.view.mode === 'month') {
            /** @type {?} */
            var flaggedMonthsCalendar = state.monthsCalendar.map((/**
             * @param {?} formattedMonth
             * @param {?} monthIndex
             * @return {?}
             */
            function (formattedMonth, monthIndex) {
                return flagMonthsCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    hoveredMonth: state.hoveredMonth,
                    selectedDate: state.selectedDate,
                    displayMonths: state.displayMonths,
                    monthIndex: monthIndex
                });
            }));
            return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
        }
        if (state.view.mode === 'year') {
            /** @type {?} */
            var yearsCalendarFlagged = state.yearsCalendarModel.map((/**
             * @param {?} formattedMonth
             * @param {?} yearIndex
             * @return {?}
             */
            function (formattedMonth, yearIndex) {
                return flagYearsCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    hoveredYear: state.hoveredYear,
                    selectedDate: state.selectedDate,
                    displayMonths: state.displayMonths,
                    yearIndex: yearIndex
                });
            }));
            return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
        }
        return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function navigateOffsetReducer(state, action) {
        /** @type {?} */
        var newState = {
            view: {
                mode: state.view.mode,
                date: shiftViewDate(state, action)
            }
        };
        return Object.assign({}, state, newState);
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function shiftViewDate(state, action) {
        if (state.view.mode === 'year' && state.minMode === 'year') {
            /** @type {?} */
            var initialDate = getYearsCalendarInitialDate(state, 0);
            /** @type {?} */
            var middleDate = chronos.shiftDate(initialDate, { year: -initialYearShift });
            return chronos.shiftDate(middleDate, action.payload);
        }
        return chronos.shiftDate(chronos.startOf(state.view.date, 'month'), action.payload);
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function getFormatOptions(state) {
        return {
            locale: state.locale,
            monthTitle: state.monthTitle,
            yearTitle: state.yearTitle,
            dayLabel: state.dayLabel,
            monthLabel: state.monthLabel,
            yearLabel: state.yearLabel,
            weekNumbers: state.weekNumbers
        };
    }
    /**
     * if view date is provided (bsValue|ngModel) it should be shown
     * if view date is not provider:
     * if minDate>currentDate (default view value), show minDate
     * if maxDate<currentDate(default view value) show maxDate
     * @param {?} viewDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function getViewDate(viewDate, minDate, maxDate) {
        /** @type {?} */
        var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
        if (minDate && chronos.isAfter(minDate, _date, 'day')) {
            return minDate;
        }
        if (maxDate && chronos.isBefore(maxDate, _date, 'day')) {
            return maxDate;
        }
        return _date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerStore = /** @class */ (function (_super) {
        __extends(BsDatepickerStore, _super);
        function BsDatepickerStore() {
            var _this = this;
            /** @type {?} */
            var _dispatcher = new rxjs.BehaviorSubject({
                type: '[datepicker] dispatcher init'
            });
            /** @type {?} */
            var state = new miniNgrx.MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
            _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
            return _this;
        }
        BsDatepickerStore.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerStore.ctorParameters = function () { return []; };
        return BsDatepickerStore;
    }(miniNgrx.MiniStore));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATEPICKER_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
    /** @type {?} */
    var datepickerAnimation = animations.trigger('datepickerAnimation', [
        animations.state('animated-down', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-down', [
            animations.style({ height: 0, overflow: 'hidden' }),
            animations.animate(DATEPICKER_ANIMATION_TIMING)
        ]),
        animations.state('animated-up', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-up', [
            animations.style({ height: '*', overflow: 'hidden' }),
            animations.animate(DATEPICKER_ANIMATION_TIMING)
        ]),
        animations.transition('* => unanimated', animations.animate('0s'))
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerContainerComponent = /** @class */ (function (_super) {
        __extends(BsDatepickerContainerComponent, _super);
        function BsDatepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._element = _element;
            _this._actions = _actions;
            _this._positionService = _positionService;
            _this.valueChange = new core.EventEmitter();
            _this.animationState = 'void';
            _this._subs = [];
            _this._effects = _effects;
            _renderer.setStyle(_element.nativeElement, 'display', 'block');
            _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
            return _this;
        }
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setValue(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._positionService.setOptions({
                modifiers: { flip: { enabled: this._config.adaptivePosition } },
                allowedPositions: ['top', 'bottom']
            });
            this._positionService.event$
                .pipe(operators.take(1))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._positionService.disable();
                if (_this._config.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    return;
                }
                _this.animationState = 'unanimated';
            }));
            this.isOtherMonthsActive = this._config.selectFromOtherMonth;
            this.containerClass = this._config.containerClass;
            this._effects
                .init(this._store)
                // intial state options
                .setOptions(this._config)
                // data binding view --> model
                .setBindings(this)
                // set event handlers
                .setEventHandlers(this)
                .registerDatepickerSideEffects();
            // todo: move it somewhere else
            // on selected date change
            this._subs.push(this._store
                /* tslint:disable-next-line: no-any */
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.selectedDate; }))
                /* tslint:disable-next-line: no-any */
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) { return _this.valueChange.emit(date); })));
        };
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "isTopPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._element.nativeElement.classList.contains('top');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.positionServiceEnable = /**
         * @return {?}
         */
        function () {
            this._positionService.enable();
        };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            /** @type {?} */
            var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
            if (isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.select(day.date));
        };
        /**
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._effects.destroy();
        };
        BsDatepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                        host: {
                            class: 'bottom',
                            '(click)': '_stopPropagation($event)',
                            role: 'dialog',
                            'aria-label': 'calendar'
                        },
                        animations: [datepickerAnimation]
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerContainerComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: BsDatepickerConfig },
            { type: BsDatepickerStore },
            { type: core.ElementRef },
            { type: BsDatepickerActions },
            { type: BsDatepickerEffects },
            { type: positioning.PositioningService }
        ]; };
        return BsDatepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerDirective = /** @class */ (function () {
        function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            /**
             * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close datepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the datepicker should be appended to.
             */
            this.container = 'body';
            this.outsideEsc = true;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
        }
        Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the datepicker is currently being shown
             */
            get: /**
             * Returns whether or not the datepicker is currently being shown
             * @return {?}
             */
            function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: /**
             * Initial value of datepicker
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._datepicker.listen({
                outsideClick: this.outsideClick,
                outsideEsc: this.outsideEsc,
                triggers: this.triggers,
                show: (/**
                 * @return {?}
                 */
                function () { return _this.show(); })
            });
            this.setConfig();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
            }
            if (changes.daysDisabled) {
                this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
        };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.show = /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._datepicker.isShown) {
                return;
            }
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDatepickerContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({ placement: this.placement });
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._datepickerRef.instance.value = value;
            })));
            // if date changes from picker (view -> model)
            this._subs.push(this._datepickerRef.instance.valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.bsValue = value;
                _this.hide();
            })));
        };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.hide = /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (this.isOpen) {
                this._datepicker.hide();
            }
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.toggle = /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        /**
         * Set config for datepicker
         */
        /**
         * Set config for datepicker
         * @return {?}
         */
        BsDatepickerDirective.prototype.setConfig = /**
         * Set config for datepicker
         * @return {?}
         */
        function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: this._bsValue,
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
            });
        };
        /**
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._datepicker.dispose();
        };
        BsDatepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDatepicker]',
                        exportAs: 'bsDatepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerDirective.ctorParameters = function () { return [
            { type: BsDatepickerConfig },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ViewContainerRef },
            { type: componentLoader.ComponentLoaderFactory }
        ]; };
        BsDatepickerDirective.propDecorators = {
            placement: [{ type: core.Input }],
            triggers: [{ type: core.Input }],
            outsideClick: [{ type: core.Input }],
            container: [{ type: core.Input }],
            outsideEsc: [{ type: core.Input }],
            isOpen: [{ type: core.Input }],
            onShown: [{ type: core.Output }],
            onHidden: [{ type: core.Output }],
            bsValue: [{ type: core.Input }],
            bsConfig: [{ type: core.Input }],
            isDisabled: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            maxDate: [{ type: core.Input }],
            minMode: [{ type: core.Input }],
            daysDisabled: [{ type: core.Input }],
            datesDisabled: [{ type: core.Input }],
            dateCustomClasses: [{ type: core.Input }],
            bsValueChange: [{ type: core.Output }]
        };
        return BsDatepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerInlineConfig = /** @class */ (function (_super) {
        __extends(BsDatepickerInlineConfig, _super);
        function BsDatepickerInlineConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BsDatepickerInlineConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerInlineConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerInlineContainerComponent = /** @class */ (function (_super) {
        __extends(BsDatepickerInlineContainerComponent, _super);
        function BsDatepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
            var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
            _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
            _renderer.setStyle(_element.nativeElement, 'position', 'static');
            return _this;
        }
        BsDatepickerInlineContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-inline-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                        host: {
                            '(click)': '_stopPropagation($event)'
                        },
                        animations: [datepickerAnimation]
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerInlineContainerComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: BsDatepickerConfig },
            { type: BsDatepickerStore },
            { type: core.ElementRef },
            { type: BsDatepickerActions },
            { type: BsDatepickerEffects },
            { type: positioning.PositioningService }
        ]; };
        return BsDatepickerInlineContainerComponent;
    }(BsDatepickerContainerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerInlineDirective = /** @class */ (function () {
        function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        }
        Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: /**
             * Initial value of datepicker
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDatepickerInlineContainerComponent)
                .to(this._elementRef)
                .show();
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._datepickerRef.instance.value = value;
            })));
            // if date changes from picker (view -> model)
            this._subs.push(this._datepickerRef.instance.valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.bsValue = value;
            })));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
                this._datepickerRef.instance.value = this._bsValue;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
                this._datepickerRef.instance.value = this._bsValue;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                this._datepickerRef.instance.value = this._bsValue;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
        };
        /**
         * Set config for datepicker
         */
        /**
         * Set config for datepicker
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.setConfig = /**
         * Set config for datepicker
         * @return {?}
         */
        function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: this._bsValue,
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
            });
        };
        /**
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._datepicker.dispose();
        };
        BsDatepickerInlineDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'bs-datepicker-inline',
                        exportAs: 'bsDatepickerInline'
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerInlineDirective.ctorParameters = function () { return [
            { type: BsDatepickerInlineConfig },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ViewContainerRef },
            { type: componentLoader.ComponentLoaderFactory }
        ]; };
        BsDatepickerInlineDirective.propDecorators = {
            bsValue: [{ type: core.Input }],
            bsConfig: [{ type: core.Input }],
            isDisabled: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            maxDate: [{ type: core.Input }],
            dateCustomClasses: [{ type: core.Input }],
            datesDisabled: [{ type: core.Input }],
            bsValueChange: [{ type: core.Output }]
        };
        return BsDatepickerInlineDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDaterangepickerInlineConfig = /** @class */ (function (_super) {
        __extends(BsDaterangepickerInlineConfig, _super);
        function BsDaterangepickerInlineConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            /**
             * turn on/off animation
             */
            _this.isAnimated = false;
            return _this;
        }
        BsDaterangepickerInlineConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDaterangepickerInlineConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
        __extends(BsDaterangepickerContainerComponent, _super);
        function BsDaterangepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._element = _element;
            _this._actions = _actions;
            _this._positionService = _positionService;
            _this.valueChange = new core.EventEmitter();
            _this.animationState = 'void';
            _this._rangeStack = [];
            _this._subs = [];
            _this._effects = _effects;
            _renderer.setStyle(_element.nativeElement, 'display', 'block');
            _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
            return _this;
        }
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._effects.setRangeValue(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._positionService.setOptions({
                modifiers: { flip: { enabled: this._config.adaptivePosition } },
                allowedPositions: ['top', 'bottom']
            });
            this._positionService.event$
                .pipe(operators.take(1))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._positionService.disable();
                if (_this._config.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    return;
                }
                _this.animationState = 'unanimated';
            }));
            this.containerClass = this._config.containerClass;
            this.isOtherMonthsActive = this._config.selectFromOtherMonth;
            this._effects
                .init(this._store)
                // intial state options
                // todo: fix this, split configs
                .setOptions(this._config)
                // data binding view --> model
                .setBindings(this)
                // set event handlers
                .setEventHandlers(this)
                .registerDatepickerSideEffects();
            // todo: move it somewhere else
            // on selected date change
            this._subs.push(this._store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.selectedRange; }))
                .subscribe((/**
             * @param {?} date
             * @return {?}
             */
            function (date) { return _this.valueChange.emit(date); })));
        };
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "isTopPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._element.nativeElement.classList.contains('top');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.positionServiceEnable = /**
         * @return {?}
         */
        function () {
            this._positionService.enable();
        };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            /** @type {?} */
            var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
            if (isDisabled) {
                return;
            }
            // if only one date is already selected
            // and user clicks on previous date
            // start selection from new date
            // but if new date is after initial one
            // than finish selection
            if (this._rangeStack.length === 1) {
                this._rangeStack =
                    day.date >= this._rangeStack[0]
                        ? [this._rangeStack[0], day.date]
                        : [day.date];
            }
            if (this._rangeStack.length === 0) {
                this._rangeStack = [day.date];
            }
            this._store.dispatch(this._actions.selectRange(this._rangeStack));
            if (this._rangeStack.length === 2) {
                this._rangeStack = [];
            }
        };
        /**
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._effects.destroy();
        };
        BsDaterangepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-daterangepicker-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                        host: {
                            class: 'bottom',
                            '(click)': '_stopPropagation($event)',
                            role: 'dialog',
                            'aria-label': 'calendar'
                        },
                        animations: [datepickerAnimation]
                    }] }
        ];
        /** @nocollapse */
        BsDaterangepickerContainerComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: BsDatepickerConfig },
            { type: BsDatepickerStore },
            { type: core.ElementRef },
            { type: BsDatepickerActions },
            { type: BsDatepickerEffects },
            { type: positioning.PositioningService }
        ]; };
        return BsDaterangepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDaterangepickerInlineContainerComponent = /** @class */ (function (_super) {
        __extends(BsDaterangepickerInlineContainerComponent, _super);
        function BsDaterangepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
            var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
            _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
            _renderer.setStyle(_element.nativeElement, 'position', 'static');
            return _this;
        }
        BsDaterangepickerInlineContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-daterangepicker-inline-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                        host: {
                            '(click)': '_stopPropagation($event)'
                        },
                        animations: [datepickerAnimation]
                    }] }
        ];
        /** @nocollapse */
        BsDaterangepickerInlineContainerComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: BsDatepickerConfig },
            { type: BsDatepickerStore },
            { type: core.ElementRef },
            { type: BsDatepickerActions },
            { type: BsDatepickerEffects },
            { type: positioning.PositioningService }
        ]; };
        return BsDaterangepickerInlineContainerComponent;
    }(BsDaterangepickerContainerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDaterangepickerInlineDirective = /** @class */ (function () {
        function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        }
        Object.defineProperty(BsDaterangepickerInlineDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: /**
             * Initial value of datepicker
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerInlineDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDaterangepickerInlineContainerComponent)
                .to(this._elementRef)
                .show();
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._datepickerRef.instance.value = value;
            })));
            // if date changes from picker (view -> model)
            this._subs.push(this._datepickerRef.instance.valueChange
                .pipe(operators.filter((/**
             * @param {?} range
             * @return {?}
             */
            function (range) { return range && range[0] && !!range[1]; })))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.bsValue = value;
            })));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDaterangepickerInlineDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
        };
        /**
         * Set config for datepicker
         */
        /**
         * Set config for datepicker
         * @return {?}
         */
        BsDaterangepickerInlineDirective.prototype.setConfig = /**
         * Set config for datepicker
         * @return {?}
         */
        function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: this._bsValue,
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
            });
        };
        /**
         * @return {?}
         */
        BsDaterangepickerInlineDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._datepicker.dispose();
        };
        BsDaterangepickerInlineDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'bs-daterangepicker-inline',
                        exportAs: 'bsDaterangepickerInline'
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerInlineDirective.ctorParameters = function () { return [
            { type: BsDaterangepickerInlineConfig },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ViewContainerRef },
            { type: componentLoader.ComponentLoaderFactory }
        ]; };
        BsDaterangepickerInlineDirective.propDecorators = {
            bsValue: [{ type: core.Input }],
            bsConfig: [{ type: core.Input }],
            isDisabled: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            maxDate: [{ type: core.Input }],
            dateCustomClasses: [{ type: core.Input }],
            datesDisabled: [{ type: core.Input }],
            bsValueChange: [{ type: core.Output }]
        };
        return BsDaterangepickerInlineDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BS_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return BsDatepickerInputDirective; })),
        multi: true
    };
    /** @type {?} */
    var BS_DATEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return BsDatepickerInputDirective; })),
        multi: true
    };
    var BsDatepickerInputDirective = /** @class */ (function () {
        function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            var _this = this;
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            /* tslint:disable-next-line: no-unused-variable */
            this._validatorChange = Function.prototype;
            // update input value on datepicker value update
            this._picker.bsValueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            }));
            // update input value on locale change
            this._localeService.localeChange.subscribe((/**
             * @return {?}
             */
            function () {
                _this._setInputValue(_this._value);
            }));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerInputDirective.prototype._setInputValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var initialDate = !value ? ''
                : chronos.formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
            this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /* tslint:disable-next-line: no-any*/
            this.writeValue(((/** @type {?} */ (event.target))).value);
            this._onChange(this._value);
            this._onTouched();
        };
        /**
         * @param {?} c
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            /** @type {?} */
            var _value = c.value;
            /* tslint:disable-next-line: prefer-switch */
            if (_value === null || _value === undefined || _value === '') {
                return null;
            }
            if (chronos.isDate(_value)) {
                /** @type {?} */
                var _isDateValid = chronos.isDateValid(_value);
                if (!_isDateValid) {
                    return { bsDate: { invalid: _value } };
                }
                if (this._picker && this._picker.minDate && chronos.isBefore(_value, this._picker.minDate, 'date')) {
                    return { bsDate: { minDate: this._picker.minDate } };
                }
                if (this._picker && this._picker.maxDate && chronos.isAfter(_value, this._picker.maxDate, 'date')) {
                    return { bsDate: { maxDate: this._picker.maxDate } };
                }
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._validatorChange = fn;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                this._value = null;
            }
            else {
                /** @type {?} */
                var _localeKey = this._localeService.currentLocale;
                /** @type {?} */
                var _locale = chronos.getLocale(_localeKey);
                if (!_locale) {
                    throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                }
                this._value = chronos.parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
                if (this._picker._config.useUtc) {
                    this._value = chronos.utcAsLocal(this._value);
                }
            }
            this._picker.bsValue = this._value;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this._picker.isDisabled = isDisabled;
            if (isDisabled) {
                this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                return;
            }
            this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onTouched = fn;
        };
        /**
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.onBlur = /**
         * @return {?}
         */
        function () {
            this._onTouched();
        };
        /**
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.hide = /**
         * @return {?}
         */
        function () {
            this._picker.hide();
            this._renderer.selectRootElement(this._elRef.nativeElement).blur();
        };
        BsDatepickerInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[bsDatepicker]",
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerInputDirective.ctorParameters = function () { return [
            { type: BsDatepickerDirective, decorators: [{ type: core.Host }] },
            { type: BsLocaleService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        return BsDatepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDaterangepickerConfig = /** @class */ (function (_super) {
        __extends(BsDaterangepickerConfig, _super);
        function BsDaterangepickerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            return _this;
        }
        BsDaterangepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDaterangepickerConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDaterangepickerDirective = /** @class */ (function () {
        function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            /**
             * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close daterangepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the daterangepicker should be appended to.
             */
            this.container = 'body';
            this.outsideEsc = true;
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            Object.assign(this, _config);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
        }
        Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the daterangepicker is currently being shown
             */
            get: /**
             * Returns whether or not the daterangepicker is currently being shown
             * @return {?}
             */
            function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
            /**
             * Initial value of daterangepicker
             */
            set: /**
             * Initial value of daterangepicker
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._datepicker.listen({
                outsideClick: this.outsideClick,
                outsideEsc: this.outsideEsc,
                triggers: this.triggers,
                show: (/**
                 * @return {?}
                 */
                function () { return _this.show(); })
            });
            this.setConfig();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
        };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.show = /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._datepicker.isShown) {
                return;
            }
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDaterangepickerContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({ placement: this.placement });
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._datepickerRef.instance.value = value;
            })));
            // if date changes from picker (view -> model)
            this._subs.push(this._datepickerRef.instance.valueChange
                .pipe(operators.filter((/**
             * @param {?} range
             * @return {?}
             */
            function (range) { return range && range[0] && !!range[1]; })))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.bsValue = value;
                _this.hide();
            })));
        };
        /**
         * Set config for daterangepicker
         */
        /**
         * Set config for daterangepicker
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.setConfig = /**
         * Set config for daterangepicker
         * @return {?}
         */
        function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: this._bsValue,
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
            });
        };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.hide = /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (this.isOpen) {
                this._datepicker.hide();
            }
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.toggle = /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        /**
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._datepicker.dispose();
        };
        BsDaterangepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDaterangepicker]',
                        exportAs: 'bsDaterangepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerDirective.ctorParameters = function () { return [
            { type: BsDaterangepickerConfig },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ViewContainerRef },
            { type: componentLoader.ComponentLoaderFactory }
        ]; };
        BsDaterangepickerDirective.propDecorators = {
            placement: [{ type: core.Input }],
            triggers: [{ type: core.Input }],
            outsideClick: [{ type: core.Input }],
            container: [{ type: core.Input }],
            outsideEsc: [{ type: core.Input }],
            isOpen: [{ type: core.Input }],
            onShown: [{ type: core.Output }],
            onHidden: [{ type: core.Output }],
            bsValue: [{ type: core.Input }],
            bsConfig: [{ type: core.Input }],
            isDisabled: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            maxDate: [{ type: core.Input }],
            dateCustomClasses: [{ type: core.Input }],
            datesDisabled: [{ type: core.Input }],
            bsValueChange: [{ type: core.Output }]
        };
        return BsDaterangepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return BsDaterangepickerInputDirective; })),
        multi: true
    };
    /** @type {?} */
    var BS_DATERANGEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return BsDaterangepickerInputDirective; })),
        multi: true
    };
    var BsDaterangepickerInputDirective = /** @class */ (function () {
        function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            var _this = this;
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            /* tslint:disable-next-line: no-unused-variable */
            this._validatorChange = Function.prototype;
            // update input value on datepicker value update
            this._picker.bsValueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            }));
            // update input value on locale change
            this._localeService.localeChange.subscribe((/**
             * @return {?}
             */
            function () {
                _this._setInputValue(_this._value);
            }));
        }
        /**
         * @param {?} date
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype._setInputValue = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var range = '';
            if (date) {
                /** @type {?} */
                var start = !date[0] ? ''
                    : chronos.formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                /** @type {?} */
                var end = !date[1] ? ''
                    : chronos.formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
            }
            this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /* tslint:disable-next-line: no-any*/
            this.writeValue(((/** @type {?} */ (event.target))).value);
            this._onChange(this._value);
            this._onTouched();
        };
        /**
         * @param {?} c
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            /** @type {?} */
            var _value = c.value;
            if (_value === null || _value === undefined || !chronos.isArray(_value)) {
                return null;
            }
            /** @type {?} */
            var _isFirstDateValid = chronos.isDateValid(_value[0]);
            /** @type {?} */
            var _isSecondDateValid = chronos.isDateValid(_value[1]);
            if (!_isFirstDateValid) {
                return { bsDate: { invalid: _value[0] } };
            }
            if (!_isSecondDateValid) {
                return { bsDate: { invalid: _value[1] } };
            }
            if (this._picker && this._picker.minDate && chronos.isBefore(_value[0], this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && chronos.isAfter(_value[1], this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._validatorChange = fn;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                this._value = null;
            }
            else {
                /** @type {?} */
                var _localeKey = this._localeService.currentLocale;
                /** @type {?} */
                var _locale = chronos.getLocale(_localeKey);
                if (!_locale) {
                    throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                }
                /** @type {?} */
                var _input = [];
                if (typeof value === 'string') {
                    _input = value.split(this._picker._config.rangeSeparator);
                }
                if (Array.isArray(value)) {
                    _input = value;
                }
                this._value = ((/** @type {?} */ (_input)))
                    .map((/**
                 * @param {?} _val
                 * @return {?}
                 */
                function (_val) {
                    if (_this._picker._config.useUtc) {
                        return chronos.utcAsLocal(chronos.parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale));
                    }
                    return chronos.parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
                }))
                    .map((/**
                 * @param {?} date
                 * @return {?}
                 */
                function (date) { return (isNaN(date.valueOf()) ? null : date); }));
            }
            this._picker.bsValue = this._value;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this._picker.isDisabled = isDisabled;
            if (isDisabled) {
                this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                return;
            }
            this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
        };
        /* tslint:disable-next-line: no-any*/
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnChange = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onChange = fn;
        };
        /* tslint:disable-next-line: no-any*/
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnTouched = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onTouched = fn;
        };
        /**
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.onBlur = /**
         * @return {?}
         */
        function () {
            this._onTouched();
        };
        /**
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.hide = /**
         * @return {?}
         */
        function () {
            this._picker.hide();
            this._renderer.selectRootElement(this._elRef.nativeElement).blur();
        };
        BsDaterangepickerInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[bsDaterangepicker]",
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerInputDirective.ctorParameters = function () { return [
            { type: BsDaterangepickerDirective, decorators: [{ type: core.Host }] },
            { type: BsLocaleService },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        return BsDaterangepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsCalendarLayoutComponent = /** @class */ (function () {
        function BsCalendarLayoutComponent() {
        }
        BsCalendarLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-calendar-layout',
                        template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                    }] }
        ];
        return BsCalendarLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsCurrentDateViewComponent = /** @class */ (function () {
        function BsCurrentDateViewComponent() {
        }
        BsCurrentDateViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-current-date',
                        template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                    }] }
        ];
        BsCurrentDateViewComponent.propDecorators = {
            title: [{ type: core.Input }]
        };
        return BsCurrentDateViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsCustomDatesViewComponent = /** @class */ (function () {
        function BsCustomDatesViewComponent() {
        }
        BsCustomDatesViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-custom-date-view',
                        template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\" type=\"button\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\" type=\"button\">Custom Range</button>\n    </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        BsCustomDatesViewComponent.propDecorators = {
            isCustomRangeShown: [{ type: core.Input }],
            ranges: [{ type: core.Input }]
        };
        return BsCustomDatesViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
        function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
            this._config = _config;
            this._elRef = _elRef;
            this._renderer = _renderer;
        }
        /**
         * @return {?}
         */
        BsDatepickerDayDecoratorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.day.isToday && this._config && this._config.customTodayClass) {
                this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
            }
            if (typeof this.day.customClasses === 'string') {
                this.day.customClasses.split(' ')
                    .filter((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) { return className; }))
                    .forEach((/**
                 * @param {?} className
                 * @return {?}
                 */
                function (className) {
                    _this._renderer.addClass(_this._elRef.nativeElement, className);
                }));
            }
        };
        BsDatepickerDayDecoratorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[bsDatepickerDayDecorator]',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            '[class.disabled]': 'day.isDisabled',
                            '[class.is-highlighted]': 'day.isHovered',
                            '[class.is-other-month]': 'day.isOtherMonth',
                            '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                            '[class.in-range]': 'day.isInRange',
                            '[class.select-start]': 'day.isSelectionStart',
                            '[class.select-end]': 'day.isSelectionEnd',
                            '[class.selected]': 'day.isSelected',
                            '[class.weekends]': '(day.dayIndex === 0 || day.dayIndex === 6) && !day.isInRange'
                        },
                        template: "{{ day.label }}"
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerDayDecoratorComponent.ctorParameters = function () { return [
            { type: BsDatepickerConfig },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        BsDatepickerDayDecoratorComponent.propDecorators = {
            day: [{ type: core.Input }]
        };
        return BsDatepickerDayDecoratorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var BsNavigationDirection = {
        UP: 0,
        DOWN: 1,
    };
    BsNavigationDirection[BsNavigationDirection.UP] = 'UP';
    BsNavigationDirection[BsNavigationDirection.DOWN] = 'DOWN';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDatepickerNavigationViewComponent = /** @class */ (function () {
        function BsDatepickerNavigationViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
        }
        /**
         * @param {?} down
         * @return {?}
         */
        BsDatepickerNavigationViewComponent.prototype.navTo = /**
         * @param {?} down
         * @return {?}
         */
        function (down) {
            this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
        };
        /**
         * @param {?} viewMode
         * @return {?}
         */
        BsDatepickerNavigationViewComponent.prototype.view = /**
         * @param {?} viewMode
         * @return {?}
         */
        function (viewMode) {
            this.onViewMode.emit(viewMode);
        };
        BsDatepickerNavigationViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-navigation-view',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "\n      <button class=\"previous\"\n              [disabled]=\"calendar.disableLeftArrow\"\n              [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n              type=\"button\"\n              (click)=\"navTo(true)\">\n          <span><svg width=\"18\" height=\"14\" viewBox=\"0 0 18 14\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7 0.341797C7.25587 0.341797 7.51203 0.441219 7.70703 0.636719L7.79297 0.722656C8.18397 1.11366 8.18397 1.74672 7.79297 2.13672L3.92969 6H17C17.552 6 18 6.448 18 7C18 7.552 17.552 8 17 8H3.92969L7.79297 11.8633C8.18397 12.2543 8.18397 12.8873 7.79297 13.2773L7.70703 13.3633C7.31603 13.7543 6.68297 13.7543 6.29297 13.3633L0.636719 7.70703C0.245718 7.31603 0.245718 6.68297 0.636719 6.29297L6.29297 0.636719C6.48847 0.441219 6.74413 0.341797 7 0.341797Z\"/>\n</svg>\n</span>\n      </button>\n\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <div class=\"month-year\"><button class=\"current\"\n              *ngIf=\"calendar.monthTitle\"\n              type=\"button\">\n          <span>{{ calendar.monthTitle }}</span>\n      </button>\n\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"current\" type=\"button\">\n          <span>{{ calendar.yearTitle }}</span>\n      </button></div>\n\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"next\"\n              [disabled]=\"calendar.disableRightArrow\"\n              [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n              type=\"button\"\n              (click)=\"navTo(false)\"><span><svg width=\"18\" height=\"14\" viewBox=\"0 0 18 14\"\n                                                xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11 0.341797C10.7441 0.341797 10.488 0.441219 10.293 0.636719L10.207 0.722656C9.81603 1.11366 9.81603 1.74672 10.207 2.13672L14.0703 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H14.0703L10.207 11.8633C9.81603 12.2543 9.81603 12.8873 10.207 13.2773L10.293 13.3633C10.684 13.7543 11.317 13.7543 11.707 13.3633L17.3633 7.70703C17.7543 7.31603 17.7543 6.68297 17.3633 6.29297L11.707 0.636719C11.5115 0.441219 11.2559 0.341797 11 0.341797Z\"/>\n</svg>\n</span>\n      </button>\n  "
                    }] }
        ];
        BsDatepickerNavigationViewComponent.propDecorators = {
            calendar: [{ type: core.Input }],
            onNavigate: [{ type: core.Output }],
            onViewMode: [{ type: core.Output }]
        };
        return BsDatepickerNavigationViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsDaysCalendarViewComponent = /** @class */ (function () {
        function BsDaysCalendarViewComponent(_config) {
            this._config = _config;
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
            this.onHoverWeek = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { month: step } });
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onViewMode.emit(event);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.selectDay = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onSelect.emit(event);
        };
        /**
         * @param {?} week
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.selectWeek = /**
         * @param {?} week
         * @return {?}
         */
        function (week) {
            var _this = this;
            if (!this._config.selectWeek) {
                return;
            }
            if (week.days
                && week.days[0]
                && !week.days[0].isDisabled
                && this._config.selectFromOtherMonth) {
                this.onSelect.emit(week.days[0]);
                return;
            }
            if (week.days.length === 0) {
                return;
            }
            /** @type {?} */
            var selectedDay = week.days.find((/**
             * @param {?} day
             * @return {?}
             */
            function (day) {
                return _this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            }));
            this.onSelect.emit(selectedDay);
        };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.weekHoverHandler = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        function (cell, isHovered) {
            var _this = this;
            if (!this._config.selectWeek) {
                return;
            }
            /** @type {?} */
            var hasActiveDays = cell.days.find((/**
             * @param {?} day
             * @return {?}
             */
            function (day) {
                return _this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            }));
            if (hasActiveDays) {
                cell.isHovered = isHovered;
                this.isWeekHovered = isHovered;
                this.onHoverWeek.emit(cell);
            }
        };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.hoverDay = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        function (cell, isHovered) {
            if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
                cell.isOtherMonthHovered = isHovered;
            }
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        BsDaysCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-days-calendar-view',
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\" [class.weekend-label]=\"(i === 0 || i === 6)\">{{ calendar.weekdays[i][0] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDaysCalendarViewComponent.ctorParameters = function () { return [
            { type: BsDatepickerConfig }
        ]; };
        BsDaysCalendarViewComponent.propDecorators = {
            calendar: [{ type: core.Input }],
            options: [{ type: core.Input }],
            onNavigate: [{ type: core.Output }],
            onViewMode: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onHover: [{ type: core.Output }],
            onHoverWeek: [{ type: core.Output }]
        };
        return BsDaysCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsMonthCalendarViewComponent = /** @class */ (function () {
        function BsMonthCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { year: step } });
        };
        /**
         * @param {?} month
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.viewMonth = /**
         * @param {?} month
         * @return {?}
         */
        function (month) {
            this.onSelect.emit(month);
        };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.hoverMonth = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        function (cell, isHovered) {
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onViewMode.emit(event);
        };
        BsMonthCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-month-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span [class.selected]=\"month.isSelected\">{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        BsMonthCalendarViewComponent.propDecorators = {
            calendar: [{ type: core.Input }],
            onNavigate: [{ type: core.Output }],
            onViewMode: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onHover: [{ type: core.Output }]
        };
        return BsMonthCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsTimepickerViewComponent = /** @class */ (function () {
        function BsTimepickerViewComponent() {
            this.ampm = 'ok';
            this.hours = 0;
            this.minutes = 0;
        }
        BsTimepickerViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-timepicker',
                        template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <button class=\"switch-time-format\" type=\"button\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                    }] }
        ];
        return BsTimepickerViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsYearsCalendarViewComponent = /** @class */ (function () {
        function BsYearsCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
        };
        /**
         * @param {?} year
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.viewYear = /**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            this.onSelect.emit(year);
        };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.hoverYear = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        function (cell, isHovered) {
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        /**
         * @param {?} event
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.onViewMode.emit(event);
        };
        BsYearsCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-years-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span [class.selected]=\"year.isSelected\">{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        BsYearsCalendarViewComponent.propDecorators = {
            calendar: [{ type: core.Input }],
            onNavigate: [{ type: core.Output }],
            onViewMode: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onHover: [{ type: core.Output }]
        };
        return BsYearsCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var _exports = [
        BsDatepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInlineContainerComponent,
        BsDatepickerInlineDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerContainerComponent,
        BsDaterangepickerDirective,
        BsDaterangepickerInlineContainerComponent,
        BsDaterangepickerInlineDirective,
        BsDaterangepickerInputDirective
    ];
    var BsDatepickerModule = /** @class */ (function () {
        function BsDatepickerModule() {
        }
        /**
         * @return {?}
         */
        BsDatepickerModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: BsDatepickerModule,
                providers: [
                    componentLoader.ComponentLoaderFactory,
                    positioning.PositioningService,
                    BsDatepickerStore,
                    BsDatepickerActions,
                    BsDatepickerConfig,
                    BsDaterangepickerConfig,
                    BsDatepickerInlineConfig,
                    BsDaterangepickerInlineConfig,
                    BsDatepickerEffects,
                    BsLocaleService
                ]
            };
        };
        BsDatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: __spread([
                            BsCalendarLayoutComponent,
                            BsCurrentDateViewComponent,
                            BsCustomDatesViewComponent,
                            BsDatepickerDayDecoratorComponent,
                            BsDatepickerNavigationViewComponent,
                            BsDaysCalendarViewComponent,
                            BsMonthCalendarViewComponent,
                            BsTimepickerViewComponent,
                            BsYearsCalendarViewComponent
                        ], _exports),
                        entryComponents: [
                            BsDatepickerContainerComponent,
                            BsDaterangepickerContainerComponent,
                            BsDatepickerInlineContainerComponent,
                            BsDaterangepickerInlineContainerComponent
                        ],
                        exports: _exports
                    },] }
        ];
        return BsDatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
        }
        /**
         * @param {?} date
         * @param {?} format
         * @param {?} locale
         * @return {?}
         */
        DateFormatter.prototype.format = /**
         * @param {?} date
         * @param {?} format
         * @param {?} locale
         * @return {?}
         */
        function (date, format, locale) {
            return chronos.formatDate(date, format, locale);
        };
        return DateFormatter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatePickerInnerComponent = /** @class */ (function () {
        function DatePickerInnerComponent() {
            this.selectionDone = new core.EventEmitter(undefined);
            this.update = new core.EventEmitter(false);
            this.activeDateChange = new core.EventEmitter(undefined);
            /* tslint:disable-next-line: no-any*/
            this.stepDay = {};
            /* tslint:disable-next-line: no-any*/
            this.stepMonth = {};
            /* tslint:disable-next-line: no-any*/
            this.stepYear = {};
            this.modes = ['day', 'month', 'year'];
            this.dateFormatter = new DateFormatter();
        }
        Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._activeDate = value;
            },
            enumerable: true,
            configurable: true
        });
        // todo: add formatter value to Date object
        // todo: add formatter value to Date object
        /**
         * @return {?}
         */
        DatePickerInnerComponent.prototype.ngOnInit = 
        // todo: add formatter value to Date object
        /**
         * @return {?}
         */
        function () {
            // todo: use date for unique value
            this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
            if (this.initDate) {
                this.activeDate = this.initDate;
                this.selectedDate = new Date(this.activeDate.valueOf());
                this.update.emit(this.activeDate);
            }
            else if (this.activeDate === undefined) {
                this.activeDate = new Date();
            }
        };
        // this.refreshView should be called here to reflect the changes on the fly
        // tslint:disable-next-line:no-unused-variable
        // this.refreshView should be called here to reflect the changes on the fly
        // tslint:disable-next-line:no-unused-variable
        /**
         * @param {?} changes
         * @return {?}
         */
        DatePickerInnerComponent.prototype.ngOnChanges = 
        // this.refreshView should be called here to reflect the changes on the fly
        // tslint:disable-next-line:no-unused-variable
        /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.refreshView();
            this.checkIfActiveDateGotUpdated(changes.activeDate);
        };
        // Check if activeDate has been update and then emit the activeDateChange with the new date
        /* tslint:disable-next-line: no-any */
        // Check if activeDate has been update and then emit the activeDateChange with the new date
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} activeDate
         * @return {?}
         */
        DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = 
        // Check if activeDate has been update and then emit the activeDateChange with the new date
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} activeDate
         * @return {?}
         */
        function (activeDate) {
            if (activeDate && !activeDate.firstChange) {
                /** @type {?} */
                var previousValue = activeDate.previousValue;
                if (previousValue &&
                    previousValue instanceof Date &&
                    previousValue.getTime() !== activeDate.currentValue.getTime()) {
                    this.activeDateChange.emit(this.activeDate);
                }
            }
        };
        /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
        DatePickerInnerComponent.prototype.setCompareHandler = /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
        function (handler, type) {
            if (type === 'day') {
                this.compareHandlerDay = handler;
            }
            if (type === 'month') {
                this.compareHandlerMonth = handler;
            }
            if (type === 'year') {
                this.compareHandlerYear = handler;
            }
        };
        /**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        DatePickerInnerComponent.prototype.compare = /**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        function (date1, date2) {
            if (date1 === undefined || date2 === undefined) {
                return undefined;
            }
            if (this.datepickerMode === 'day' && this.compareHandlerDay) {
                return this.compareHandlerDay(date1, date2);
            }
            if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
                return this.compareHandlerMonth(date1, date2);
            }
            if (this.datepickerMode === 'year' && this.compareHandlerYear) {
                return this.compareHandlerYear(date1, date2);
            }
            return void 0;
        };
        /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
        DatePickerInnerComponent.prototype.setRefreshViewHandler = /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
        function (handler, type) {
            if (type === 'day') {
                this.refreshViewHandlerDay = handler;
            }
            if (type === 'month') {
                this.refreshViewHandlerMonth = handler;
            }
            if (type === 'year') {
                this.refreshViewHandlerYear = handler;
            }
        };
        /**
         * @return {?}
         */
        DatePickerInnerComponent.prototype.refreshView = /**
         * @return {?}
         */
        function () {
            if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
                this.refreshViewHandlerDay();
            }
            if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
                this.refreshViewHandlerMonth();
            }
            if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
                this.refreshViewHandlerYear();
            }
        };
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
        DatePickerInnerComponent.prototype.dateFilter = /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
        function (date, format) {
            return this.dateFormatter.format(date, format, this.locale);
        };
        /* tslint:disable-next-line: no-any*/
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} dateObject
         * @return {?}
         */
        DatePickerInnerComponent.prototype.isActive = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} dateObject
         * @return {?}
         */
        function (dateObject) {
            if (this.compare(dateObject.date, this.activeDate) === 0) {
                this.activeDateId = dateObject.uid;
                return true;
            }
            return false;
        };
        /* tslint:disable-next-line: no-any*/
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
        DatePickerInnerComponent.prototype.createDateObject = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
        function (date, format) {
            /* tslint:disable-next-line: no-any*/
            /** @type {?} */
            var dateObject = {};
            dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            dateObject.date = this.fixTimeZone(dateObject.date);
            dateObject.label = this.dateFilter(date, format);
            dateObject.selected = this.compare(date, this.selectedDate) === 0;
            dateObject.disabled = this.isDisabled(date);
            dateObject.current = this.compare(date, new Date()) === 0;
            dateObject.customClass = this.getCustomClassForDate(dateObject.date);
            return dateObject;
        };
        /* tslint:disable-next-line: no-any*/
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} arr
         * @param {?} size
         * @return {?}
         */
        DatePickerInnerComponent.prototype.split = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} arr
         * @param {?} size
         * @return {?}
         */
        function (arr, size) {
            /* tslint:disable-next-line: no-any*/
            /** @type {?} */
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        };
        // Fix a hard-reproducible bug with timezones
        // The bug depends on OS, browser, current timezone and current date
        // i.e.
        // var date = new Date(2014, 0, 1);
        // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
        // date.getHours()); can result in "2013 11 31 23" because of the bug.
        // Fix a hard-reproducible bug with timezones
        // The bug depends on OS, browser, current timezone and current date
        // i.e.
        // var date = new Date(2014, 0, 1);
        // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
        // date.getHours()); can result in "2013 11 31 23" because of the bug.
        /**
         * @param {?} date
         * @return {?}
         */
        DatePickerInnerComponent.prototype.fixTimeZone = 
        // Fix a hard-reproducible bug with timezones
        // The bug depends on OS, browser, current timezone and current date
        // i.e.
        // var date = new Date(2014, 0, 1);
        // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
        // date.getHours()); can result in "2013 11 31 23" because of the bug.
        /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var hours = date.getHours();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
        };
        /**
         * @param {?} date
         * @param {?=} isManual
         * @return {?}
         */
        DatePickerInnerComponent.prototype.select = /**
         * @param {?} date
         * @param {?=} isManual
         * @return {?}
         */
        function (date, isManual) {
            if (isManual === void 0) { isManual = true; }
            if (this.datepickerMode === this.minMode) {
                if (!this.activeDate) {
                    this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
                }
                this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                this.activeDate = this.fixTimeZone(this.activeDate);
                if (isManual) {
                    this.selectionDone.emit(this.activeDate);
                }
            }
            else {
                this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                this.activeDate = this.fixTimeZone(this.activeDate);
                if (isManual) {
                    this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
                }
            }
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
            this.refreshView();
        };
        /**
         * @param {?} direction
         * @return {?}
         */
        DatePickerInnerComponent.prototype.move = /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            /* tslint:disable-next-line: no-any*/
            /** @type {?} */
            var expectedStep;
            if (this.datepickerMode === 'day') {
                expectedStep = this.stepDay;
            }
            if (this.datepickerMode === 'month') {
                expectedStep = this.stepMonth;
            }
            if (this.datepickerMode === 'year') {
                expectedStep = this.stepYear;
            }
            if (expectedStep) {
                /** @type {?} */
                var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
                /** @type {?} */
                var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
                this.activeDate = new Date(year, month, 1);
                this.refreshView();
                this.activeDateChange.emit(this.activeDate);
            }
        };
        /**
         * @param {?} _direction
         * @return {?}
         */
        DatePickerInnerComponent.prototype.toggleMode = /**
         * @param {?} _direction
         * @return {?}
         */
        function (_direction) {
            /** @type {?} */
            var direction = _direction || 1;
            if ((this.datepickerMode === this.maxMode && direction === 1) ||
                (this.datepickerMode === this.minMode && direction === -1)) {
                return;
            }
            this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
            this.refreshView();
        };
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */
        DatePickerInnerComponent.prototype.getCustomClassForDate = /**
         * @protected
         * @param {?} date
         * @return {?}
         */
        function (date) {
            var _this = this;
            if (!this.customClass) {
                return '';
            }
            // todo: build a hash of custom classes, it will work faster
            /** @type {?} */
            var customClassObject = this.customClass.find((/**
             * @param {?} customClass
             * @return {?}
             */
            function (customClass) {
                return (customClass.date.valueOf() === date.valueOf() &&
                    customClass.mode === _this.datepickerMode);
            }), this);
            return customClassObject === undefined ? '' : customClassObject.clazz;
        };
        /**
         * @protected
         * @param {?} date1Disabled
         * @param {?} date2
         * @return {?}
         */
        DatePickerInnerComponent.prototype.compareDateDisabled = /**
         * @protected
         * @param {?} date1Disabled
         * @param {?} date2
         * @return {?}
         */
        function (date1Disabled, date2) {
            if (date1Disabled === undefined || date2 === undefined) {
                return undefined;
            }
            if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
                return this.compareHandlerDay(date1Disabled.date, date2);
            }
            if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
                return this.compareHandlerMonth(date1Disabled.date, date2);
            }
            if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
                return this.compareHandlerYear(date1Disabled.date, date2);
            }
            return undefined;
        };
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */
        DatePickerInnerComponent.prototype.isDisabled = /**
         * @protected
         * @param {?} date
         * @return {?}
         */
        function (date) {
            var _this = this;
            /** @type {?} */
            var isDateDisabled = false;
            if (this.dateDisabled) {
                this.dateDisabled.forEach((/**
                 * @param {?} disabledDate
                 * @return {?}
                 */
                function (disabledDate) {
                    if (_this.compareDateDisabled(disabledDate, date) === 0) {
                        isDateDisabled = true;
                    }
                }));
            }
            if (this.dayDisabled) {
                isDateDisabled =
                    isDateDisabled ||
                        this.dayDisabled.indexOf(date.getDay()) > -1;
            }
            return (isDateDisabled ||
                (this.minDate && this.compare(date, this.minDate) < 0) ||
                (this.maxDate && this.compare(date, this.maxDate) > 0));
        };
        DatePickerInnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker-inner',
                        template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                    }] }
        ];
        DatePickerInnerComponent.propDecorators = {
            locale: [{ type: core.Input }],
            datepickerMode: [{ type: core.Input }],
            startingDay: [{ type: core.Input }],
            yearRange: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            maxDate: [{ type: core.Input }],
            minMode: [{ type: core.Input }],
            maxMode: [{ type: core.Input }],
            showWeeks: [{ type: core.Input }],
            formatDay: [{ type: core.Input }],
            formatMonth: [{ type: core.Input }],
            formatYear: [{ type: core.Input }],
            formatDayHeader: [{ type: core.Input }],
            formatDayTitle: [{ type: core.Input }],
            formatMonthTitle: [{ type: core.Input }],
            onlyCurrentMonth: [{ type: core.Input }],
            shortcutPropagation: [{ type: core.Input }],
            customClass: [{ type: core.Input }],
            monthColLimit: [{ type: core.Input }],
            yearColLimit: [{ type: core.Input }],
            dateDisabled: [{ type: core.Input }],
            dayDisabled: [{ type: core.Input }],
            initDate: [{ type: core.Input }],
            selectionDone: [{ type: core.Output }],
            update: [{ type: core.Output }],
            activeDateChange: [{ type: core.Output }],
            activeDate: [{ type: core.Input }]
        };
        return DatePickerInnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatepickerConfig = /** @class */ (function () {
        function DatepickerConfig() {
            this.locale = 'en';
            this.datepickerMode = 'day';
            this.startingDay = 0;
            this.yearRange = 20;
            this.minMode = 'day';
            this.maxMode = 'year';
            this.showWeeks = true;
            this.formatDay = 'DD';
            this.formatMonth = 'MMMM';
            this.formatYear = 'YYYY';
            this.formatDayHeader = 'dd';
            this.formatDayTitle = 'MMMM YYYY';
            this.formatMonthTitle = 'YYYY';
            this.onlyCurrentMonth = false;
            this.monthColLimit = 3;
            this.yearColLimit = 5;
            this.shortcutPropagation = false;
        }
        DatepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return DatepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return DatePickerComponent; })),
        multi: true
    };
    /* tslint:disable:component-selector-name component-selector-type */
    var DatePickerComponent = /** @class */ (function () {
        function DatePickerComponent(config) {
            /**
             * sets datepicker mode, supports: `day`, `month`, `year`
             */
            this.datepickerMode = 'day';
            /**
             * if false week numbers will be hidden
             */
            this.showWeeks = true;
            this.selectionDone = new core.EventEmitter(undefined);
            /**
             * callback to invoke when the activeDate is changed.
             */
            this.activeDateChange = new core.EventEmitter(undefined);
            /* tslint:disable-next-line: no-any*/
            this.onChange = Function.prototype;
            /* tslint:disable-next-line: no-any*/
            this.onTouched = Function.prototype;
            this._now = new Date();
            this.config = config;
            this.configureOptions();
        }
        Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
            /** currently active date */
            get: /**
             * currently active date
             * @return {?}
             */
            function () {
                return this._activeDate || this._now;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._activeDate = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DatePickerComponent.prototype.configureOptions = /**
         * @return {?}
         */
        function () {
            Object.assign(this, this.config);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DatePickerComponent.prototype.onUpdate = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.activeDate = event;
            this.onChange(event);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DatePickerComponent.prototype.onSelectionDone = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.selectionDone.emit(event);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DatePickerComponent.prototype.onActiveDateChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.activeDateChange.emit(event);
        };
        // todo: support null value
        /* tslint:disable-next-line: no-any*/
        // todo: support null value
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} value
         * @return {?}
         */
        DatePickerComponent.prototype.writeValue = 
        // todo: support null value
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._datePicker.compare(value, this._activeDate) === 0) {
                return;
            }
            if (value && value instanceof Date) {
                this.activeDate = value;
                this._datePicker.select(value, false);
                return;
            }
            this.activeDate = value ? new Date(value) : void 0;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        DatePickerComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        DatePickerComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        DatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker',
                        template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                        providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        DatePickerComponent.ctorParameters = function () { return [
            { type: DatepickerConfig }
        ]; };
        DatePickerComponent.propDecorators = {
            datepickerMode: [{ type: core.Input }],
            initDate: [{ type: core.Input }],
            minDate: [{ type: core.Input }],
            maxDate: [{ type: core.Input }],
            minMode: [{ type: core.Input }],
            maxMode: [{ type: core.Input }],
            showWeeks: [{ type: core.Input }],
            formatDay: [{ type: core.Input }],
            formatMonth: [{ type: core.Input }],
            formatYear: [{ type: core.Input }],
            formatDayHeader: [{ type: core.Input }],
            formatDayTitle: [{ type: core.Input }],
            formatMonthTitle: [{ type: core.Input }],
            startingDay: [{ type: core.Input }],
            yearRange: [{ type: core.Input }],
            onlyCurrentMonth: [{ type: core.Input }],
            shortcutPropagation: [{ type: core.Input }],
            monthColLimit: [{ type: core.Input }],
            yearColLimit: [{ type: core.Input }],
            customClass: [{ type: core.Input }],
            dateDisabled: [{ type: core.Input }],
            dayDisabled: [{ type: core.Input }],
            activeDate: [{ type: core.Input }],
            selectionDone: [{ type: core.Output }],
            activeDateChange: [{ type: core.Output }],
            _datePicker: [{ type: core.ViewChild, args: [DatePickerInnerComponent, { static: true },] }]
        };
        return DatePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DayPickerComponent = /** @class */ (function () {
        function DayPickerComponent(datePicker) {
            this.labels = [];
            this.rows = [];
            this.weekNumbers = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */
            function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /*protected getDaysInMonth(year:number, month:number) {
         return ((month === 1) && (year % 4 === 0) &&
         ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
         }*/
        /*protected getDaysInMonth(year:number, month:number) {
           return ((month === 1) && (year % 4 === 0) &&
           ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
           }*/
        /**
         * @return {?}
         */
        DayPickerComponent.prototype.ngOnInit = /*protected getDaysInMonth(year:number, month:number) {
           return ((month === 1) && (year % 4 === 0) &&
           ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
           }*/
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var self = this;
            this.datePicker.stepDay = { months: 1 };
            this.datePicker.setRefreshViewHandler((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var year = this.activeDate.getFullYear();
                /** @type {?} */
                var month = this.activeDate.getMonth();
                /** @type {?} */
                var firstDayOfMonth = new Date(year, month, 1);
                /** @type {?} */
                var difference = this.startingDay - firstDayOfMonth.getDay();
                /** @type {?} */
                var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
                /** @type {?} */
                var firstDate = new Date(firstDayOfMonth.getTime());
                if (numDisplayedFromPreviousMonth > 0) {
                    firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
                }
                // 42 is the number of days on a six-week calendar
                /** @type {?} */
                var _days = self.getDates(firstDate, 42);
                /** @type {?} */
                var days = [];
                for (var i = 0; i < 42; i++) {
                    /** @type {?} */
                    var _dateObject = this.createDateObject(_days[i], this.formatDay);
                    _dateObject.secondary = _days[i].getMonth() !== month;
                    _dateObject.uid = this.uniqueId + '-' + i;
                    days[i] = _dateObject;
                }
                self.labels = [];
                for (var j = 0; j < 7; j++) {
                    self.labels[j] = {};
                    self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                    self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
                }
                self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
                self.rows = this.split(days, 7);
                if (this.showWeeks) {
                    self.weekNumbers = [];
                    /** @type {?} */
                    var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                    /** @type {?} */
                    var numWeeks = self.rows.length;
                    for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                        self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                    }
                }
            }), 'day');
            this.datePicker.setCompareHandler((/**
             * @param {?} date1
             * @param {?} date2
             * @return {?}
             */
            function (date1, date2) {
                /** @type {?} */
                var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
                /** @type {?} */
                var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
                return d1.getTime() - d2.getTime();
            }), 'day');
            this.datePicker.refreshView();
        };
        /**
         * @protected
         * @param {?} startDate
         * @param {?} n
         * @return {?}
         */
        DayPickerComponent.prototype.getDates = /**
         * @protected
         * @param {?} startDate
         * @param {?} n
         * @return {?}
         */
        function (startDate, n) {
            /** @type {?} */
            var dates = new Array(n);
            /** @type {?} */
            var current = new Date(startDate.getTime());
            /** @type {?} */
            var i = 0;
            /** @type {?} */
            var date;
            while (i < n) {
                date = new Date(current.getTime());
                date = this.datePicker.fixTimeZone(date);
                dates[i++] = date;
                current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            }
            return dates;
        };
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */
        DayPickerComponent.prototype.getISO8601WeekNumber = /**
         * @protected
         * @param {?} date
         * @return {?}
         */
        function (date) {
            /** @type {?} */
            var checkDate = new Date(date.getTime());
            // Thursday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            /** @type {?} */
            var time = checkDate.getTime();
            // Compare with Jan 1
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
        };
        DayPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'daypicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        DayPickerComponent.ctorParameters = function () { return [
            { type: DatePickerInnerComponent }
        ]; };
        return DayPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MonthPickerComponent = /** @class */ (function () {
        function MonthPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */
            function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MonthPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var self = this;
            this.datePicker.stepMonth = { years: 1 };
            this.datePicker.setRefreshViewHandler((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var months = new Array(12);
                /** @type {?} */
                var year = this.activeDate.getFullYear();
                /** @type {?} */
                var date;
                for (var i = 0; i < 12; i++) {
                    date = new Date(year, i, 1);
                    date = this.fixTimeZone(date);
                    months[i] = this.createDateObject(date, this.formatMonth);
                    months[i].uid = this.uniqueId + '-' + i;
                }
                self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
                self.rows = this.split(months, self.datePicker.monthColLimit);
            }), 'month');
            this.datePicker.setCompareHandler((/**
             * @param {?} date1
             * @param {?} date2
             * @return {?}
             */
            function (date1, date2) {
                /** @type {?} */
                var d1 = new Date(date1.getFullYear(), date1.getMonth());
                /** @type {?} */
                var d2 = new Date(date2.getFullYear(), date2.getMonth());
                return d1.getTime() - d2.getTime();
            }), 'month');
            this.datePicker.refreshView();
        };
        MonthPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'monthpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        MonthPickerComponent.ctorParameters = function () { return [
            { type: DatePickerInnerComponent }
        ]; };
        return MonthPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var YearPickerComponent = /** @class */ (function () {
        function YearPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */
            function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        YearPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var self = this;
            this.datePicker.stepYear = { years: this.datePicker.yearRange };
            this.datePicker.setRefreshViewHandler((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var years = new Array(this.yearRange);
                /** @type {?} */
                var date;
                /** @type {?} */
                var start = self.getStartingYear(this.activeDate.getFullYear());
                for (var i = 0; i < this.yearRange; i++) {
                    date = new Date(start + i, 0, 1);
                    date = this.fixTimeZone(date);
                    years[i] = this.createDateObject(date, this.formatYear);
                    years[i].uid = this.uniqueId + '-' + i;
                }
                self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
                self.rows = this.split(years, self.datePicker.yearColLimit);
            }), 'year');
            this.datePicker.setCompareHandler((/**
             * @param {?} date1
             * @param {?} date2
             * @return {?}
             */
            function (date1, date2) {
                return date1.getFullYear() - date2.getFullYear();
            }), 'year');
            this.datePicker.refreshView();
        };
        /**
         * @protected
         * @param {?} year
         * @return {?}
         */
        YearPickerComponent.prototype.getStartingYear = /**
         * @protected
         * @param {?} year
         * @return {?}
         */
        function (year) {
            // todo: parseInt
            return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
        };
        YearPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'yearpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        YearPickerComponent.ctorParameters = function () { return [
            { type: DatePickerInnerComponent }
        ]; };
        return YearPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatepickerModule = /** @class */ (function () {
        function DatepickerModule() {
        }
        /**
         * @return {?}
         */
        DatepickerModule.forRoot = /**
         * @return {?}
         */
        function () {
            return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
        };
        DatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
                        declarations: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        exports: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        entryComponents: [DatePickerComponent]
                    },] }
        ];
        return DatepickerModule;
    }());

    exports.BsDatepickerConfig = BsDatepickerConfig;
    exports.BsDatepickerContainerComponent = BsDatepickerContainerComponent;
    exports.BsDatepickerDirective = BsDatepickerDirective;
    exports.BsDatepickerInlineConfig = BsDatepickerInlineConfig;
    exports.BsDatepickerInlineContainerComponent = BsDatepickerInlineContainerComponent;
    exports.BsDatepickerInlineDirective = BsDatepickerInlineDirective;
    exports.BsDatepickerInputDirective = BsDatepickerInputDirective;
    exports.BsDatepickerModule = BsDatepickerModule;
    exports.BsDaterangepickerConfig = BsDaterangepickerConfig;
    exports.BsDaterangepickerContainerComponent = BsDaterangepickerContainerComponent;
    exports.BsDaterangepickerDirective = BsDaterangepickerDirective;
    exports.BsDaterangepickerInlineConfig = BsDaterangepickerInlineConfig;
    exports.BsDaterangepickerInlineContainerComponent = BsDaterangepickerInlineContainerComponent;
    exports.BsDaterangepickerInlineDirective = BsDaterangepickerInlineDirective;
    exports.BsDaterangepickerInputDirective = BsDaterangepickerInputDirective;
    exports.BsLocaleService = BsLocaleService;
    exports.DateFormatter = DateFormatter;
    exports.DatePickerComponent = DatePickerComponent;
    exports.DatePickerInnerComponent = DatePickerInnerComponent;
    exports.DatepickerConfig = DatepickerConfig;
    exports.DatepickerModule = DatepickerModule;
    exports.DayPickerComponent = DayPickerComponent;
    exports.MonthPickerComponent = MonthPickerComponent;
    exports.YearPickerComponent = YearPickerComponent;
    exports.ɵa = DATEPICKER_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = BsDatepickerAbstractComponent;
    exports.ɵc = BsDatepickerStore;
    exports.ɵd = BsDatepickerEffects;
    exports.ɵe = BsDatepickerActions;
    exports.ɵf = datepickerAnimation;
    exports.ɵg = BsCalendarLayoutComponent;
    exports.ɵh = BsCurrentDateViewComponent;
    exports.ɵi = BsCustomDatesViewComponent;
    exports.ɵj = BsDatepickerDayDecoratorComponent;
    exports.ɵk = BsDatepickerNavigationViewComponent;
    exports.ɵl = BsDaysCalendarViewComponent;
    exports.ɵm = BsMonthCalendarViewComponent;
    exports.ɵn = BsTimepickerViewComponent;
    exports.ɵo = BsYearsCalendarViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-datepicker.umd.js.map
