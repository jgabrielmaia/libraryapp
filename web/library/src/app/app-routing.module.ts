import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagementComponent } from './book-management/book-management.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  { path: '', component: LibraryComponent }, // Define the main route
  { path: 'management', component: BookManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
