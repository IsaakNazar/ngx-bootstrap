/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
export class BsDatepickerNavigationViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    navTo(down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    }
    /**
     * @param {?} viewMode
     * @return {?}
     */
    view(viewMode) {
        this.onViewMode.emit(viewMode);
    }
}
BsDatepickerNavigationViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-datepicker-navigation-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
      <button class="previous"
              [disabled]="calendar.disableLeftArrow"
              [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
              type="button"
              (click)="navTo(true)">
          <span><svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0.341797C7.25587 0.341797 7.51203 0.441219 7.70703 0.636719L7.79297 0.722656C8.18397 1.11366 8.18397 1.74672 7.79297 2.13672L3.92969 6H17C17.552 6 18 6.448 18 7C18 7.552 17.552 8 17 8H3.92969L7.79297 11.8633C8.18397 12.2543 8.18397 12.8873 7.79297 13.2773L7.70703 13.3633C7.31603 13.7543 6.68297 13.7543 6.29297 13.3633L0.636719 7.70703C0.245718 7.31603 0.245718 6.68297 0.636719 6.29297L6.29297 0.636719C6.48847 0.441219 6.74413 0.341797 7 0.341797Z"/>
</svg>
</span>
      </button>

      &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

      <div class="month-year"><button class="current"
              *ngIf="calendar.monthTitle"
              type="button">
          <span>{{ calendar.monthTitle }}</span>
      </button>

      &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

      <button class="current" type="button">
          <span>{{ calendar.yearTitle }}</span>
      </button></div>

      &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

      <button class="next"
              [disabled]="calendar.disableRightArrow"
              [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
              type="button"
              (click)="navTo(false)"><span><svg width="18" height="14" viewBox="0 0 18 14"
                                                xmlns="http://www.w3.org/2000/svg">
<path d="M11 0.341797C10.7441 0.341797 10.488 0.441219 10.293 0.636719L10.207 0.722656C9.81603 1.11366 9.81603 1.74672 10.207 2.13672L14.0703 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H14.0703L10.207 11.8633C9.81603 12.2543 9.81603 12.8873 10.207 13.2773L10.293 13.3633C10.684 13.7543 11.317 13.7543 11.707 13.3633L17.3633 7.70703C17.7543 7.31603 17.7543 6.68297 17.3633 6.29297L11.707 0.636719C11.5115 0.441219 11.2559 0.341797 11 0.341797Z"/>
</svg>
</span>
      </button>
  `
            }] }
];
BsDatepickerNavigationViewComponent.propDecorators = {
    calendar: [{ type: Input }],
    onNavigate: [{ type: Output }],
    onViewMode: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.calendar;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onViewMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLHFCQUFxQixFQUV0QixNQUFNLGNBQWMsQ0FBQztBQWdEdEIsTUFBTSxPQUFPLG1DQUFtQztJQTlDaEQ7UUFpRFksZUFBVSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ3ZELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBd0IsQ0FBQztJQVdsRSxDQUFDOzs7OztJQVRDLEtBQUssQ0FBQyxJQUFhO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUM3RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsUUFBOEI7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDVDthQUNGOzs7dUJBRUUsS0FBSzt5QkFFTCxNQUFNO3lCQUNOLE1BQU07Ozs7SUFIUCx1REFBeUM7O0lBRXpDLHlEQUFpRTs7SUFDakUseURBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FsZW5kYXIuZGlzYWJsZUxlZnRBcnJvd1wiXG4gICAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAoY2xpY2spPVwibmF2VG8odHJ1ZSlcIj5cbiAgICAgICAgICA8c3Bhbj48c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTggMTRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTcgMC4zNDE3OTdDNy4yNTU4NyAwLjM0MTc5NyA3LjUxMjAzIDAuNDQxMjE5IDcuNzA3MDMgMC42MzY3MTlMNy43OTI5NyAwLjcyMjY1NkM4LjE4Mzk3IDEuMTEzNjYgOC4xODM5NyAxLjc0NjcyIDcuNzkyOTcgMi4xMzY3MkwzLjkyOTY5IDZIMTdDMTcuNTUyIDYgMTggNi40NDggMTggN0MxOCA3LjU1MiAxNy41NTIgOCAxNyA4SDMuOTI5NjlMNy43OTI5NyAxMS44NjMzQzguMTgzOTcgMTIuMjU0MyA4LjE4Mzk3IDEyLjg4NzMgNy43OTI5NyAxMy4yNzczTDcuNzA3MDMgMTMuMzYzM0M3LjMxNjAzIDEzLjc1NDMgNi42ODI5NyAxMy43NTQzIDYuMjkyOTcgMTMuMzYzM0wwLjYzNjcxOSA3LjcwNzAzQzAuMjQ1NzE4IDcuMzE2MDMgMC4yNDU3MTggNi42ODI5NyAwLjYzNjcxOSA2LjI5Mjk3TDYuMjkyOTcgMC42MzY3MTlDNi40ODg0NyAwLjQ0MTIxOSA2Ljc0NDEzIDAuMzQxNzk3IDcgMC4zNDE3OTdaXCIvPlxuPC9zdmc+XG48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb250aC15ZWFyXCI+PGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIlxuICAgICAgICAgICAgICAqbmdJZj1cImNhbGVuZGFyLm1vbnRoVGl0bGVcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPHNwYW4+e3sgY2FsZW5kYXIubW9udGhUaXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPHNwYW4+e3sgY2FsZW5kYXIueWVhclRpdGxlIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+PC9kaXY+XG5cbiAgICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dFwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvd1wiXG4gICAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVSaWdodEFycm93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm5hdlRvKGZhbHNlKVwiPjxzcGFuPjxzdmcgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxOCAxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTExIDAuMzQxNzk3QzEwLjc0NDEgMC4zNDE3OTcgMTAuNDg4IDAuNDQxMjE5IDEwLjI5MyAwLjYzNjcxOUwxMC4yMDcgMC43MjI2NTZDOS44MTYwMyAxLjExMzY2IDkuODE2MDMgMS43NDY3MiAxMC4yMDcgMi4xMzY3MkwxNC4wNzAzIDZIMUMwLjQ0OCA2IDAgNi40NDggMCA3QzAgNy41NTIgMC40NDggOCAxIDhIMTQuMDcwM0wxMC4yMDcgMTEuODYzM0M5LjgxNjAzIDEyLjI1NDMgOS44MTYwMyAxMi44ODczIDEwLjIwNyAxMy4yNzczTDEwLjI5MyAxMy4zNjMzQzEwLjY4NCAxMy43NTQzIDExLjMxNyAxMy43NTQzIDExLjcwNyAxMy4zNjMzTDE3LjM2MzMgNy43MDcwM0MxNy43NTQzIDcuMzE2MDMgMTcuNzU0MyA2LjY4Mjk3IDE3LjM2MzMgNi4yOTI5N0wxMS43MDcgMC42MzY3MTlDMTEuNTExNSAwLjQ0MTIxOSAxMS4yNTU5IDAuMzQxNzk3IDExIDAuMzQxNzk3WlwiLz5cbjwvc3ZnPlxuPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBjYWxlbmRhcjogRGF5c0NhbGVuZGFyVmlld01vZGVsO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25EaXJlY3Rpb24+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBuYXZUbyhkb3duOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoXG4gICAgICBkb3duID8gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gOiBCc05hdmlnYXRpb25EaXJlY3Rpb24uVVBcbiAgICApO1xuICB9XG5cbiAgdmlldyh2aWV3TW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdCh2aWV3TW9kZSk7XG4gIH1cbn1cbiJdfQ==