/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
export class BsDaysCalendarViewComponent {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onHoverWeek = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        /** @type {?} */
        const step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectDay(event) {
        this.onSelect.emit(event);
    }
    /**
     * @param {?} week
     * @return {?}
     */
    selectWeek(week) {
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
        const selectedDay = week.days.find((/**
         * @param {?} day
         * @return {?}
         */
        (day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        this.onSelect.emit(selectedDay);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    weekHoverHandler(cell, isHovered) {
        if (!this._config.selectWeek) {
            return;
        }
        /** @type {?} */
        const hasActiveDays = cell.days.find((/**
         * @param {?} day
         * @return {?}
         */
        (day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverDay(cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell, isHovered });
    }
}
BsDaysCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-days-calendar-view',
                // changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
        <tr>
          <!--if show weeks-->
          <th *ngIf="options.showWeekNumbers"></th>
          <th *ngFor="let weekday of calendar.weekdays; let i = index"
              aria-label="weekday" [class.weekend-label]="(i === 0 || i === 6)">{{ calendar.weekdays[i] }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let week of calendar.weeks; let i = index">
          <td class="week" [class.active-week]="isWeekHovered"  *ngIf="options.showWeekNumbers">
            <span
                (click)="selectWeek(week)"
                (mouseenter)="weekHoverHandler(week, true)"
                (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
          </td>
          <td *ngFor="let day of week.days" role="gridcell">
          <span bsDatepickerDayDecorator
                [day]="day"
                (click)="selectDay(day)"
                (mouseenter)="hoverDay(day, true)"
                (mouseleave)="hoverDay(day, false)">{{ day.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>

    </bs-calendar-layout>
  `
            }] }
];
/** @nocollapse */
BsDaysCalendarViewComponent.ctorParameters = () => [
    { type: BsDatepickerConfig }
];
BsDaysCalendarViewComponent.propDecorators = {
    calendar: [{ type: Input }],
    options: [{ type: Input }],
    onNavigate: [{ type: Output }],
    onViewMode: [{ type: Output }],
    onSelect: [{ type: Output }],
    onHover: [{ type: Output }],
    onHoverWeek: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.calendar;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.options;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onViewMode;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onSelect;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHover;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHoverWeek;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.isWeekHovered;
    /**
     * @type {?}
     * @private
     */
    BsDaysCalendarViewComponent.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxxQkFBcUIsRUFNdEIsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUE4Q2hFLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFhdEMsWUFBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFUckMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ25ELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBd0IsQ0FBQztRQUV0RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFDNUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQzdDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFJUCxDQUFDOzs7OztJQUVwRCxVQUFVLENBQUMsS0FBNEI7O2NBQy9CLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBMkI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxD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REFBMEQ7O0lBRTFELG9EQUF1Qjs7Ozs7SUFFWCw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENlbGxIb3ZlckV2ZW50LFxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxuICBEYXlWaWV3TW9kZWwsIFdlZWtWaWV3TW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicy1kYXlzLWNhbGVuZGFyLXZpZXcnLFxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XG5cbiAgICAgIDwhLS1kYXlzIG1hdHJpeC0tPlxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJkYXlzIHdlZWtzXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDwhLS1pZiBzaG93IHdlZWtzLS0+XG4gICAgICAgICAgPHRoICpuZ0lmPVwib3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj48L3RoPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgd2Vla2RheSBvZiBjYWxlbmRhci53ZWVrZGF5czsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ3ZWVrZGF5XCIgW2NsYXNzLndlZWtlbmQtbGFiZWxdPVwiKGkgPT09IDAgfHwgaSA9PT0gNilcIj57eyBjYWxlbmRhci53ZWVrZGF5c1tpXSB9fVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIGNhbGVuZGFyLndlZWtzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwid2Vla1wiIFtjbGFzcy5hY3RpdmUtd2Vla109XCJpc1dlZWtIb3ZlcmVkXCIgICpuZ0lmPVwib3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFdlZWsod2VlaylcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIndlZWtIb3ZlckhhbmRsZXIod2VlaywgdHJ1ZSlcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIndlZWtIb3ZlckhhbmRsZXIod2VlaywgZmFsc2UpXCI+e3sgY2FsZW5kYXIud2Vla051bWJlcnNbaV0gfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIiByb2xlPVwiZ3JpZGNlbGxcIj5cbiAgICAgICAgICA8c3BhbiBic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JcbiAgICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdERheShkYXkpXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlckRheShkYXksIHRydWUpXCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlckRheShkYXksIGZhbHNlKVwiPnt7IGRheS5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IERhdGVwaWNrZXJSZW5kZXJPcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5Vmlld01vZGVsPigpO1xuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEhvdmVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyV2VlayA9IG5ldyBFdmVudEVtaXR0ZXI8V2Vla1ZpZXdNb2RlbD4oKTtcblxuICBpc1dlZWtIb3ZlcmVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnKSB7IH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyBtb250aDogc3RlcCB9IH0pO1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2VsZWN0RGF5KGV2ZW50OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2VsZWN0V2Vlayh3ZWVrOiBXZWVrVmlld01vZGVsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2Vlaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3ZWVrLmRheXNcbiAgICAgICYmIHdlZWsuZGF5c1swXVxuICAgICAgJiYgIXdlZWsuZGF5c1swXS5pc0Rpc2FibGVkXG4gICAgICAmJiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGgpIHtcblxuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHdlZWsuZGF5c1swXSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2Vlay5kYXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gd2Vlay5kYXlzLmZpbmQoKGRheTogRGF5Vmlld01vZGVsKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXG4gICAgICAgIDogIWRheS5pc090aGVyTW9udGggJiYgIWRheS5pc0Rpc2FibGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHNlbGVjdGVkRGF5KTtcbiAgfVxuXG4gIHdlZWtIb3ZlckhhbmRsZXIoY2VsbDogV2Vla1ZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2Vlaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjdGl2ZURheXMgPSBjZWxsLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGhcbiAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzQWN0aXZlRGF5cykge1xuICAgICAgY2VsbC5pc0hvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgICB0aGlzLmlzV2Vla0hvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgICB0aGlzLm9uSG92ZXJXZWVrLmVtaXQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgaG92ZXJEYXkoY2VsbDogRGF5Vmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoICYmIGNlbGwuaXNPdGhlck1vbnRoKSB7XG4gICAgICBjZWxsLmlzT3RoZXJNb250aEhvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XG4gIH1cbn1cbiJdfQ==