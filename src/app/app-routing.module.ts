import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'newplace',
    loadChildren: () => import('./places/newplace/newplace.module').then( m => m.NewplacePageModule)
  },
  {
    path: 'places',
    children: [
      {
        path: '',
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: ':placeId',
        loadChildren: () => import('./places/placedetail/placedetail.module').then( m => m.PlacedetailPageModule )
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
