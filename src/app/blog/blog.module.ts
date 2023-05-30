import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BlogsRoutes } from './blog.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { BlogMasonary2Component } from './blogMasonry2/blogMasonry2.component';
import { BlogMasonary3Component } from './blogMasonry3/blogMasonry3.component';
import { BlogColumn2Component } from './blogColumn2/blogColumn2.component';
import { BlogColumn3Component } from './blogColumn3/blogColumn3.component';
import { BlogSidebarComponent } from './blogSidebar/blogSidebar.component';
import { BlogNoSidebarComponent } from './blogNoSidebar/blogNoSidebar.component';
import { BlogListingSideBarComponent } from './blogListingSideBar/blogListingSideBar.component';
import { BlogDetailComponent } from './blogDetail/blogDetail.component';

@NgModule({
  imports: [
	 CommonModule,
	 FormsModule,
	 RouterModule.forChild(BlogsRoutes),
	 WidgetsModule
  ],
  declarations: [
	 BlogMasonary2Component,
	 BlogMasonary3Component,
	 BlogColumn2Component,
	 BlogColumn3Component,
	 BlogSidebarComponent,
	 BlogNoSidebarComponent,
	 BlogListingSideBarComponent,
	 BlogDetailComponent
  ]
})

export class BlogModule {}
