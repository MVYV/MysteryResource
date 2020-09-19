import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { ReviewModel } from '../../models/review.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {

    @Input() public displayedColumns: string[];
    @Input() public displayedData: ReviewModel[];

    selection = new SelectionModel<any>(true, []);
    dataSource: MatTableDataSource<ReviewModel>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private bottomSheet: MatBottomSheet) {
        this.dataSource = new MatTableDataSource(this.displayedData);
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public openBottomSheet(): void {
        this.bottomSheet.open(DataTableActionsComponent);
    }

    public drop(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
    }

    public isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    public masterToggle(): void {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    public checkboxLabel(row?: any): string {
        if (!row) {
            return `${ this.isAllSelected() ? 'select' : 'deselect' } all`;
        }
        console.log(row);
        return `${ this.selection.isSelected(row) ? 'deselect' : 'select' } row ${ row.position + 1 }`;
    }

    public applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}

@Component({
    selector: 'app-data-table-actions',
    templateUrl: './data-table-actions.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableActionsComponent {
    constructor(private bottomSheetRef: MatBottomSheetRef<DataTableActionsComponent>) {}

    public openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
