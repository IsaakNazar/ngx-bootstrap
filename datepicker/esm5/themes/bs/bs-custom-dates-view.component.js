/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
/**
 * @record
 */
export function BsCustomDates() { }
if (false) {
    /** @type {?} */
    BsCustomDates.prototype.label;
    /** @type {?} */
    BsCustomDates.prototype.value;
}
var BsCustomDatesViewComponent = /** @class */ (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\" type=\"button\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\" type=\"button\">Custom Range</button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    BsCustomDatesViewComponent.propDecorators = {
        isCustomRangeShown: [{ type: Input }],
        ranges: [{ type: Input }]
    };
    return BsCustomDatesViewComponent;
}());
export { BsCustomDatesViewComponent };
if (false) {
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.isCustomRangeShown;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.ranges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFMUUsbUNBR0M7OztJQUZDLDhCQUFjOztJQUNkLDhCQUFxQjs7QUFHdkI7SUFBQTtJQWFBLENBQUM7O2dCQWJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsZ1BBS1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7cUNBRUUsS0FBSzt5QkFDTCxLQUFLOztJQUNSLGlDQUFDO0NBQUEsQUFiRCxJQWFDO1NBSFksMEJBQTBCOzs7SUFDckMsd0RBQWtDOztJQUNsQyw0Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJzQ3VzdG9tRGF0ZXMge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogRGF0ZSB8IERhdGVbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtY3VzdG9tLWRhdGUtdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zXCI+XG4gICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCByYW5nZSBvZiByYW5nZXNcIiB0eXBlPVwiYnV0dG9uXCI+e3sgcmFuZ2UubGFiZWwgfX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJpc0N1c3RvbVJhbmdlU2hvd25cIiB0eXBlPVwiYnV0dG9uXCI+Q3VzdG9tIFJhbmdlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNDdXN0b21SYW5nZVNob3duOiB0cnVlO1xuICBASW5wdXQoKSByYW5nZXM6IEJzQ3VzdG9tRGF0ZXNbXTtcbn1cbiJdfQ==