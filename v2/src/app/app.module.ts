import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { ClipboardModule } from 'ngx-clipboard';
import { ContextMenuModule } from 'ngx-contextmenu';
import { NouisliderModule } from 'ng2-nouislider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ColorPickerModule } from 'ngx-color-picker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TagInputModule } from 'ngx-chips';
import { FormWizardModule } from 'angular2-wizard';
import { NgxSummernoteModule } from 'ngx-summernote'; 
import { TinymceModule } from 'angular2-tinymce';
import { AceEditorModule } from 'ng2-ace-editor';
import { CodemirrorModule } from 'ng2-codemirror';
import { ChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { MorrisJsModule } from 'angular-morris-js';
import { ChartistModule } from 'ng-chartist';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { BarRatingModule } from "ngx-bar-rating";
import { FullCalendarModule } from 'ng-fullcalendar'; 
import { ScrollToModule } from 'ng2-scroll-to-el';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SettingsPanelComponent } from './shared/settings-panel/settings-panel.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './error-pages/page404/page404.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AccordionsComponent } from './basic-ui-elements/accordions/accordions.component';
import { ButtonsComponent } from './basic-ui-elements/buttons/buttons.component';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
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
import { TodoComponent } from './apps/todo-list/todo/todo.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingsPanelComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    Page404Component,
    WidgetsComponent,
    AccordionsComponent,
    ButtonsComponent,
    TodoListComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    DropdownsComponent,
    ModalsComponent,
    ProgressbarComponent,
    PaginationComponent,
    TabsComponent,
    TypographyComponent,
    TooltipsComponent,
    ChartjsComponent,
    MorrisComponent,
    ChartistComponent,
    BasicTableComponent,
    DataTableComponent,
    PopupsComponent,
    NotificationsComponent,
    ThemifyComponent,
    FlagIconsComponent,
    MdiComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    Page500Component,
    LoginComponent,
    Login2Component,
    RegisterComponent,
    Register2Component,
    LockscreenComponent,
    BlankPageComponent,
    ProfileComponent,
    FaqComponent,
    Faq2Component,
    NewsGridComponent,
    TimelineComponent,
    SearchResultsComponent,
    PortfolioComponent,
    InvoiceComponent,
    PricingComponent,
    OrdersComponent,
    EmailComponent,
    CalendarComponent,
    DragulaComponent,
    ClipboardComponent,
    MyContextMenuComponent,
    SliderComponent,
    CarouselComponent,
    LoadersComponent,
    BasicElementsComponent,
    AdvancedElementsComponent,
    TextEditorComponent,
    CodeEditorComponent,
    WizardComponent,
    GoogleMapComponent,
    DocumentationComponent,
    ValidationComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DragulaModule.forRoot(),
    ClipboardModule,
    ContextMenuModule.forRoot(),
    NouisliderModule,
    CarouselModule,
    DropzoneModule,
    ColorPickerModule,
    AmazingTimePickerModule,
    TagInputModule,
    FormWizardModule,
    NgxSummernoteModule,
    TinymceModule.withConfig({
      skin_url: '../assets/tinymce/skins/lightgray'
    }),
    AceEditorModule,
    CodemirrorModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgSelectModule,
    MorrisJsModule,
    ChartistModule,
    DataTablesModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCnT63XUjqjPgXZ0lFTU_pdpfUX7swzTTM' }),
    BarRatingModule,
    FullCalendarModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
