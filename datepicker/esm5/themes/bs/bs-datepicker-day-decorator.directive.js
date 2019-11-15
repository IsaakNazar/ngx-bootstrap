/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
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
        { type: Component, args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    BsDatepickerDayDecoratorComponent.propDecorators = {
        day: [{ type: Input }]
    };
    return BsDatepickerDayDecoratorComponent;
}());
export { BsDatepickerDayDecoratorComponent };
if (false) {
    /** @type {?} */
    BsDatepickerDayDecoratorComponent.prototype.day;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDayDecoratorComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDayDecoratorComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerDayDecoratorComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdoRTtJQW1CRSwyQ0FDVSxPQUEyQixFQUMzQixNQUFrQixFQUNsQixTQUFvQjtRQUZwQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDMUIsQ0FBQzs7OztJQUVMLG9EQUFROzs7SUFBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25GO1FBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUM5QixNQUFNOzs7O1lBQUMsVUFBQyxTQUFpQixJQUFLLE9BQUEsU0FBUyxFQUFULENBQVMsRUFBQztpQkFDeEMsT0FBTzs7OztZQUFDLFVBQUMsU0FBaUI7Z0JBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDSCxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsZ0JBQWdCO3dCQUNwQyx3QkFBd0IsRUFBRSxlQUFlO3dCQUN6Qyx3QkFBd0IsRUFBRSxrQkFBa0I7d0JBQzVDLCtCQUErQixFQUFFLHlCQUF5Qjt3QkFDMUQsa0JBQWtCLEVBQUUsZUFBZTt3QkFDbkMsc0JBQXNCLEVBQUUsc0JBQXNCO3dCQUM5QyxvQkFBb0IsRUFBRSxvQkFBb0I7d0JBQzFDLGtCQUFrQixFQUFFLGdCQUFnQjt3QkFDcEMsa0JBQWtCLEVBQUUsOERBQThEO3FCQUNuRjtvQkFDRCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFsQlEsa0JBQWtCO2dCQU56QixVQUFVO2dCQUdWLFNBQVM7OztzQkF1QlIsS0FBSzs7SUFxQlIsd0NBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXRCWSxpQ0FBaUM7OztJQUM1QyxnREFBMkI7Ozs7O0lBR3pCLG9EQUFtQzs7Ozs7SUFDbkMsbURBQTBCOzs7OztJQUMxQixzREFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IERheVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JdJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkYXkuaXNEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5pcy1oaWdobGlnaHRlZF0nOiAnZGF5LmlzSG92ZXJlZCcsXG4gICAgJ1tjbGFzcy5pcy1vdGhlci1tb250aF0nOiAnZGF5LmlzT3RoZXJNb250aCcsXG4gICAgJ1tjbGFzcy5pcy1hY3RpdmUtb3RoZXItbW9udGhdJzogJ2RheS5pc090aGVyTW9udGhIb3ZlcmVkJyxcbiAgICAnW2NsYXNzLmluLXJhbmdlXSc6ICdkYXkuaXNJblJhbmdlJyxcbiAgICAnW2NsYXNzLnNlbGVjdC1zdGFydF0nOiAnZGF5LmlzU2VsZWN0aW9uU3RhcnQnLFxuICAgICdbY2xhc3Muc2VsZWN0LWVuZF0nOiAnZGF5LmlzU2VsZWN0aW9uRW5kJyxcbiAgICAnW2NsYXNzLnNlbGVjdGVkXSc6ICdkYXkuaXNTZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy53ZWVrZW5kc10nOiAnKGRheS5kYXlJbmRleCA9PT0gMCB8fCBkYXkuZGF5SW5kZXggPT09IDYpICYmICFkYXkuaXNJblJhbmdlJ1xuICB9LFxuICB0ZW1wbGF0ZTogYHt7IGRheS5sYWJlbCB9fWBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF5OiBEYXlWaWV3TW9kZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRheS5pc1RvZGF5ICYmIHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fY29uZmlnLmN1c3RvbVRvZGF5Q2xhc3MpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5kYXkuY3VzdG9tQ2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZGF5LmN1c3RvbUNsYXNzZXMuc3BsaXQoJyAnKVxuICAgICAgICAuZmlsdGVyKChjbGFzc05hbWU6IHN0cmluZykgPT4gY2xhc3NOYW1lKVxuICAgICAgICAuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==