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
              type="button"
              (click)="view('month')">
          <span>{{ calendar.monthTitle }}</span>
      </button>

      &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

      <button class="current" (click)="view('year')" type="button">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLHFCQUFxQixFQUV0QixNQUFNLGNBQWMsQ0FBQztBQWlEdEIsTUFBTSxPQUFPLG1DQUFtQztJQS9DaEQ7UUFrRFksZUFBVSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ3ZELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBd0IsQ0FBQztJQVdsRSxDQUFDOzs7OztJQVRDLEtBQUssQ0FBQyxJQUFhO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUM3RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsUUFBOEI7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ1Q7YUFDRjs7O3VCQUVFLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNOzs7O0lBSFAsdURBQXlDOztJQUV6Qyx5REFBaUU7O0lBQ2pFLHlEQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInByZXZpb3VzXCJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3dcIlxuICAgICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlTGVmdEFycm93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm5hdlRvKHRydWUpXCI+XG4gICAgICAgICAgPHNwYW4+PHN2ZyB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDE4IDE0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk03IDAuMzQxNzk3QzcuMjU1ODcgMC4zNDE3OTcgNy41MTIwMyAwLjQ0MTIxOSA3LjcwNzAzIDAuNjM2NzE5TDcuNzkyOTcgMC43MjI2NTZDOC4xODM5NyAxLjExMzY2IDguMTgzOTcgMS43NDY3MiA3Ljc5Mjk3IDIuMTM2NzJMMy45Mjk2OSA2SDE3QzE3LjU1MiA2IDE4IDYuNDQ4IDE4IDdDMTggNy41NTIgMTcuNTUyIDggMTcgOEgzLjkyOTY5TDcuNzkyOTcgMTEuODYzM0M4LjE4Mzk3IDEyLjI1NDMgOC4xODM5NyAxMi44ODczIDcuNzkyOTcgMTMuMjc3M0w3LjcwNzAzIDEzLjM2MzNDNy4zMTYwMyAxMy43NTQzIDYuNjgyOTcgMTMuNzU0MyA2LjI5Mjk3IDEzLjM2MzNMMC42MzY3MTkgNy43MDcwM0MwLjI0NTcxOCA3LjMxNjAzIDAuMjQ1NzE4IDYuNjgyOTcgMC42MzY3MTkgNi4yOTI5N0w2LjI5Mjk3IDAuNjM2NzE5QzYuNDg4NDcgMC40NDEyMTkgNi43NDQxMyAwLjM0MTc5NyA3IDAuMzQxNzk3WlwiLz5cbjwvc3ZnPlxuPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibW9udGgteWVhclwiPjxidXR0b24gY2xhc3M9XCJjdXJyZW50XCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJjYWxlbmRhci5tb250aFRpdGxlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ2aWV3KCdtb250aCcpXCI+XG4gICAgICAgICAgPHNwYW4+e3sgY2FsZW5kYXIubW9udGhUaXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIiAoY2xpY2spPVwidmlldygneWVhcicpXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIDxzcGFuPnt7IGNhbGVuZGFyLnllYXJUaXRsZSB9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPjwvZGl2PlxuXG4gICAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cblxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRcIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3dcIlxuICAgICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJuYXZUbyhmYWxzZSlcIj48c3Bhbj48c3ZnIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTggMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPHBhdGggZD1cIk0xMSAwLjM0MTc5N0MxMC43NDQxIDAuMzQxNzk3IDEwLjQ4OCAwLjQ0MTIxOSAxMC4yOTMgMC42MzY3MTlMMTAuMjA3IDAuNzIyNjU2QzkuODE2MDMgMS4xMTM2NiA5LjgxNjAzIDEuNzQ2NzIgMTAuMjA3IDIuMTM2NzJMMTQuMDcwMyA2SDFDMC40NDggNiAwIDYuNDQ4IDAgN0MwIDcuNTUyIDAuNDQ4IDggMSA4SDE0LjA3MDNMMTAuMjA3IDExLjg2MzNDOS44MTYwMyAxMi4yNTQzIDkuODE2MDMgMTIuODg3MyAxMC4yMDcgMTMuMjc3M0wxMC4yOTMgMTMuMzYzM0MxMC42ODQgMTMuNzU0MyAxMS4zMTcgMTMuNzU0MyAxMS43MDcgMTMuMzYzM0wxNy4zNjMzIDcuNzA3MDNDMTcuNzU0MyA3LjMxNjAzIDE3Ljc1NDMgNi42ODI5NyAxNy4zNjMzIDYuMjkyOTdMMTEuNzA3IDAuNjM2NzE5QzExLjUxMTUgMC40NDEyMTkgMTEuMjU1OSAwLjM0MTc5NyAxMSAwLjM0MTc5N1pcIi8+XG48L3N2Zz5cbjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcblxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRGlyZWN0aW9uPigpO1xuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XG5cbiAgbmF2VG8oZG93bjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KFxuICAgICAgZG93biA/IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOIDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLlVQXG4gICAgKTtcbiAgfVxuXG4gIHZpZXcodmlld01vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQodmlld01vZGUpO1xuICB9XG59XG4iXX0=