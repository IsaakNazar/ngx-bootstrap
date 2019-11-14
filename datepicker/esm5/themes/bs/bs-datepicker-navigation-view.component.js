/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
var BsDatepickerNavigationViewComponent = /** @class */ (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n      <button class=\"previous\"\n              [disabled]=\"calendar.disableLeftArrow\"\n              [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n              type=\"button\"\n              (click)=\"navTo(true)\">\n          <span><svg width=\"18\" height=\"14\" viewBox=\"0 0 18 14\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7 0.341797C7.25587 0.341797 7.51203 0.441219 7.70703 0.636719L7.79297 0.722656C8.18397 1.11366 8.18397 1.74672 7.79297 2.13672L3.92969 6H17C17.552 6 18 6.448 18 7C18 7.552 17.552 8 17 8H3.92969L7.79297 11.8633C8.18397 12.2543 8.18397 12.8873 7.79297 13.2773L7.70703 13.3633C7.31603 13.7543 6.68297 13.7543 6.29297 13.3633L0.636719 7.70703C0.245718 7.31603 0.245718 6.68297 0.636719 6.29297L6.29297 0.636719C6.48847 0.441219 6.74413 0.341797 7 0.341797Z\"/>\n</svg>\n</span>\n      </button>\n\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <div class=\"month-year\"><button class=\"current\"\n              *ngIf=\"calendar.monthTitle\"\n              type=\"button\"\n              (click)=\"view('month')\">\n          <span>{{ calendar.monthTitle }}</span>\n      </button>\n\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"current\" (click)=\"view('year')\" type=\"button\">\n          <span>{{ calendar.yearTitle }}</span>\n      </button></div>\n\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"next\"\n              [disabled]=\"calendar.disableRightArrow\"\n              [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n              type=\"button\"\n              (click)=\"navTo(false)\"><span><svg width=\"18\" height=\"14\" viewBox=\"0 0 18 14\"\n                                                xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11 0.341797C10.7441 0.341797 10.488 0.441219 10.293 0.636719L10.207 0.722656C9.81603 1.11366 9.81603 1.74672 10.207 2.13672L14.0703 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H14.0703L10.207 11.8633C9.81603 12.2543 9.81603 12.8873 10.207 13.2773L10.293 13.3633C10.684 13.7543 11.317 13.7543 11.707 13.3633L17.3633 7.70703C17.7543 7.31603 17.7543 6.68297 17.3633 6.29297L11.707 0.636719C11.5115 0.441219 11.2559 0.341797 11 0.341797Z\"/>\n</svg>\n</span>\n      </button>\n  "
                }] }
    ];
    BsDatepickerNavigationViewComponent.propDecorators = {
        calendar: [{ type: Input }],
        onNavigate: [{ type: Output }],
        onViewMode: [{ type: Output }]
    };
    return BsDatepickerNavigationViewComponent;
}());
export { BsDatepickerNavigationViewComponent };
if (false) {
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.calendar;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onViewMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLHFCQUFxQixFQUV0QixNQUFNLGNBQWMsQ0FBQztBQUV0QjtJQUFBO1FBa0RZLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUN2RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7SUFXbEUsQ0FBQzs7Ozs7SUFUQyxtREFBSzs7OztJQUFMLFVBQU0sSUFBYTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsa0RBQUk7Ozs7SUFBSixVQUFLLFFBQThCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSw2K0VBMENUO2lCQUNGOzs7MkJBRUUsS0FBSzs2QkFFTCxNQUFNOzZCQUNOLE1BQU07O0lBV1QsMENBQUM7Q0FBQSxBQTlERCxJQThEQztTQWZZLG1DQUFtQzs7O0lBQzlDLHVEQUF5Qzs7SUFFekMseURBQWlFOztJQUNqRSx5REFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxidXR0b24gY2xhc3M9XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlTGVmdEFycm93XCJcbiAgICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJuYXZUbyh0cnVlKVwiPlxuICAgICAgICAgIDxzcGFuPjxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxOCAxNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNNyAwLjM0MTc5N0M3LjI1NTg3IDAuMzQxNzk3IDcuNTEyMDMgMC40NDEyMTkgNy43MDcwMyAwLjYzNjcxOUw3Ljc5Mjk3IDAuNzIyNjU2QzguMTgzOTcgMS4xMTM2NiA4LjE4Mzk3IDEuNzQ2NzIgNy43OTI5NyAyLjEzNjcyTDMuOTI5NjkgNkgxN0MxNy41NTIgNiAxOCA2LjQ0OCAxOCA3QzE4IDcuNTUyIDE3LjU1MiA4IDE3IDhIMy45Mjk2OUw3Ljc5Mjk3IDExLjg2MzNDOC4xODM5NyAxMi4yNTQzIDguMTgzOTcgMTIuODg3MyA3Ljc5Mjk3IDEzLjI3NzNMNy43MDcwMyAxMy4zNjMzQzcuMzE2MDMgMTMuNzU0MyA2LjY4Mjk3IDEzLjc1NDMgNi4yOTI5NyAxMy4zNjMzTDAuNjM2NzE5IDcuNzA3MDNDMC4yNDU3MTggNy4zMTYwMyAwLjI0NTcxOCA2LjY4Mjk3IDAuNjM2NzE5IDYuMjkyOTdMNi4yOTI5NyAwLjYzNjcxOUM2LjQ4ODQ3IDAuNDQxMjE5IDYuNzQ0MTMgMC4zNDE3OTcgNyAwLjM0MTc5N1pcIi8+XG48L3N2Zz5cbjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1vbnRoLXllYXJcIj48YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiY2FsZW5kYXIubW9udGhUaXRsZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidmlldygnbW9udGgnKVwiPlxuICAgICAgICAgIDxzcGFuPnt7IGNhbGVuZGFyLm1vbnRoVGl0bGUgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjdXJyZW50XCIgKGNsaWNrKT1cInZpZXcoJ3llYXInKVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICA8c3Bhbj57eyBjYWxlbmRhci55ZWFyVGl0bGUgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj48L2Rpdj5cblxuICAgICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJuZXh0XCJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhbGVuZGFyLmRpc2FibGVSaWdodEFycm93XCJcbiAgICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAoY2xpY2spPVwibmF2VG8oZmFsc2UpXCI+PHNwYW4+PHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE4IDE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbjxwYXRoIGQ9XCJNMTEgMC4zNDE3OTdDMTAuNzQ0MSAwLjM0MTc5NyAxMC40ODggMC40NDEyMTkgMTAuMjkzIDAuNjM2NzE5TDEwLjIwNyAwLjcyMjY1NkM5LjgxNjAzIDEuMTEzNjYgOS44MTYwMyAxLjc0NjcyIDEwLjIwNyAyLjEzNjcyTDE0LjA3MDMgNkgxQzAuNDQ4IDYgMCA2LjQ0OCAwIDdDMCA3LjU1MiAwLjQ0OCA4IDEgOEgxNC4wNzAzTDEwLjIwNyAxMS44NjMzQzkuODE2MDMgMTIuMjU0MyA5LjgxNjAzIDEyLjg4NzMgMTAuMjA3IDEzLjI3NzNMMTAuMjkzIDEzLjM2MzNDMTAuNjg0IDEzLjc1NDMgMTEuMzE3IDEzLjc1NDMgMTEuNzA3IDEzLjM2MzNMMTcuMzYzMyA3LjcwNzAzQzE3Ljc1NDMgNy4zMTYwMyAxNy43NTQzIDYuNjgyOTcgMTcuMzYzMyA2LjI5Mjk3TDExLjcwNyAwLjYzNjcxOUMxMS41MTE1IDAuNDQxMjE5IDExLjI1NTkgMC4zNDE3OTcgMTEgMC4zNDE3OTdaXCIvPlxuPC9zdmc+XG48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XG5cbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkRpcmVjdGlvbj4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIG5hdlRvKGRvd246IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdChcbiAgICAgIGRvd24gPyBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5VUFxuICAgICk7XG4gIH1cblxuICB2aWV3KHZpZXdNb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KHZpZXdNb2RlKTtcbiAgfVxufVxuIl19