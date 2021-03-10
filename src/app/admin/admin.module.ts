import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MaterialDesign } from '../material-desain/material';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: '',
        redirectTo: '/admin/dashboard'
      }
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent, ImageComponent, ProductComponent, GalleryComponent, ProductDetailComponent],
  entryComponents: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    ImageCropperModule,
    FormsModule
  ]
})
export class AdminModule { }
