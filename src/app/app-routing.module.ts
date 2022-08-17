import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './error-pages/page404/page404.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AccordionsComponent } from './basic-ui-elements/accordions/accordions.component';
import { ButtonsComponent } from './basic-ui-elements/buttons/buttons.component';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { BadgesComponent } from './basic-ui-elements/badges/badges.component';
import { BreadcrumbsComponent } from './basic-ui-elements/breadcrumbs/breadcrumbs.component';
import { DropdownsComponent } from './basic-ui-elements/dropdowns/dropdowns.component';
import { ModalsComponent } from './basic-ui-elements/modals/modals.component';
import { ProgressbarComponent } from './basic-ui-elements/progressbar/progressbar.component';
import { PaginationComponent } from './basic-ui-elements/pagination/pagination.component';
import { TabsComponent } from './basic-ui-elements/tabs/tabs.component';
import { TypographyComponent } from './basic-ui-elements/typography/typography.component';
import { TooltipsComponent } from './basic-ui-elements/tooltips/tooltips.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { MorrisComponent } from './charts/morris/morris.component';
import { ChartistComponent } from './charts/chartist/chartist.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { DataTableComponent } from './tables/data-table/data-table.component';
import { PopupsComponent } from './advanced-ui-elements/popups/popups.component';
import { NotificationsComponent } from './advanced-ui-elements/notifications/notifications.component';
import { ThemifyComponent } from './icons/themify/themify.component';
import { FlagIconsComponent } from './icons/flag-icons/flag-icons.component';
import { MdiComponent } from './icons/mdi/mdi.component';
import { FontAwesomeComponent } from './icons/font-awesome/font-awesome.component';
import { SimpleLineIconsComponent } from './icons/simple-line-icons/simple-line-icons.component';
import { Page500Component } from './error-pages/page500/page500.component';
import { LoginComponent } from './general-pages/login/login.component';
import { Login2Component } from './general-pages/login2/login2.component';
import { RegisterComponent } from './general-pages/register/register.component';
import { Register2Component } from './general-pages/register2/register2.component';
import { LockscreenComponent } from './general-pages/lock-screen/lock-screen.component';
import { BlankPageComponent } from './general-pages/blank-page/blank-page.component';
import { ProfileComponent } from './general-pages/profile/profile.component';
import { FaqComponent } from './general-pages/faq/faq.component';
import { Faq2Component } from './general-pages/faq2/faq2.component';
import { NewsGridComponent } from './general-pages/news-grid/news-grid.component';
import { TimelineComponent } from './general-pages/timeline/timeline.component';
import { SearchResultsComponent } from './general-pages/search-results/search-results.component';
import { PortfolioComponent } from './general-pages/portfolio/portfolio.component';
import { InvoiceComponent } from './general-pages/invoice/invoice.component';
import { PricingComponent } from './general-pages/pricing/pricing.component';
import { OrdersComponent } from './general-pages/orders/orders.component';
import { EmailComponent } from './apps/email/email.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { DragulaComponent } from './advanced-ui-elements/dragula/dragula.component';
import { ClipboardComponent } from './advanced-ui-elements/clipboard/clipboard.component';
import { MyContextMenuComponent } from './advanced-ui-elements/context-menu/context-menu.component';
import { SliderComponent } from './advanced-ui-elements/slider/slider.component';
import { CarouselComponent } from './advanced-ui-elements/carousel/carousel.component';
import { LoadersComponent } from './advanced-ui-elements/loaders/loaders.component';
import { BasicElementsComponent } from './forms/basic-elements/basic-elements.component';
import { AdvancedElementsComponent } from './forms/advanced-elements/advanced-elements.component';
import { TextEditorComponent } from './editors/text-editor/text-editor.component';
import { CodeEditorComponent } from './editors/code-editor/code-editor.component';
import { WizardComponent } from './forms/wizard/wizard.component';
import { GoogleMapComponent } from './maps/google-map/google-map.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ValidationComponent } from './forms/validation/validation.component';
import { AppComponent } from './app.component';

// import { FederationModule } from './modules/federations/federations.module';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'dropdowns', component: DropdownsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'dragula', component: DragulaComponent },
  { path: 'clipboard', component: ClipboardComponent },
  { path: 'context-menu', component: MyContextMenuComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'loaders', component: LoadersComponent },
  { path: 'basic-elements', component: BasicElementsComponent },
  { path: 'advanced-elements', component: AdvancedElementsComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'wizard', component: WizardComponent },
  { path: 'text-editor', component: TextEditorComponent },
  { path: 'code-editor', component: CodeEditorComponent },
  { path: 'chartjs', component: ChartjsComponent },
  { path: 'chartist', component: ChartistComponent },
  { path: 'morris', component: MorrisComponent },
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'popups', component: PopupsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'flag-icons', component: FlagIconsComponent },
  { path: 'mdi', component: MdiComponent },
  { path: 'font-awesome', component: FontAwesomeComponent },
  { path: 'simple-line-icons', component: SimpleLineIconsComponent },
  { path: 'themify', component: ThemifyComponent },
  { path: 'google-map', component: GoogleMapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-2', component: Login2Component },
  { path: 'register', component: RegisterComponent },
  { path: 'register-2', component: Register2Component },
  { path: 'lock-screen', component: LockscreenComponent },
  { path: 'error-500', component: Page500Component },
  { path: 'error-404', component: Page404Component },
  { path: 'blank-page', component: BlankPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'faq-2', component: Faq2Component },
  { path: 'news-grid', component: NewsGridComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'email', component: EmailComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'documentation', component: DocumentationComponent },  
  {
    path: 'main',    
    children: [
      {
        path: 'security',
        loadChildren: './modules/security/security.module#SecurityModule'
      }
    ]
  },
  {
    path: 'main',    
    children: [
      {
        path: 'requirements',
        loadChildren: './modules/requirements/requirements.module#RequirementsModule'
      }
    ]
  },
  {
    path: 'main',    
    children: [
      {
        path: 'federations',
        loadChildren: './modules/federations/federations.module#FederationsModule'
      }
    ]
  },
  {
    path: 'main',    
    children: [
      {
        path: 'pointsattention',
        loadChildren: './modules/points-attention/points-attention.module#PointsAttentionModule'
      }
    ]
  },
  { path: '**', redirectTo: '/main/federations'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
