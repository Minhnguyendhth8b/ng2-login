import {Directive, ElementRef, HostListener, Input} from '@angular/core';
declare var $:any;
@Directive({
    selector: '[ttHtml]',
    inputs: ['criteria']
})
export class TooltipDirective{
    constructor(private el: ElementRef) {
        this.el = el;
    }

    set criteria(criteria:string) {
        let criteriaValue = JSON.parse(criteria);
        if(criteria && criteria.length) {
            let html:string = '<ul class="list-group">';
            for(let mission of criteriaValue) {
                html += `<li class="list-group-item justify-content-between">
                            ${mission.actionName}
                            <span class="badge badge-default badge-pill">${mission.targetComplete}</span>
                        </li>`;
            }
            html += '</ul>';
            this.el.nativeElement.title = html;
        }
    }
}