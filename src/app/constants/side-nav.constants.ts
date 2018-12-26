export const SIDENAVLIST = [
  {name: 'Dashboard', icon: 'insert_chart',  link: '/dashboard'},
  {name: 'Create Customer', icon: 'verified_user',  link: '/create-user'},
  {name: 'Add Subscription', icon: 'library_add', link: '/add-subscription' },
  {name: 'Manage Dynamic Controls', icon: 'settings', link: '/manage-controls'},
  {name: 'Manage Customers', icon: 'pageview', link: '/manage-customers'},
  {name: 'Payments', icon: 'attach_money', link: '/payments'},
  {name: 'Reports', icon: 'public', link: '/reports'},
  {name: 'Print', icon: 'print', link: '/print'}
 ];

 export const DYNAMIC_CONTROLS = [
  {icon: 'insert_chart', name: 'Dashboard', formControlName: 'dashboard'},
  {icon: 'supervised_user_circle', name: 'Clients', formControlName: 'client'},
  {icon: 'accessibility_new', name: 'Vendors', formControlName: 'vendor'},
  {icon: 'local_grocery_store', name: 'Items', formControlName: 'item'},
  {icon: 'assignment', name: 'Invoices', formControlName: 'invoice'},
  {icon: 'description', name: 'Quotes', formControlName: 'quotes'},
  {icon: 'edit', name: 'Sales Order', formControlName: 'salesOrder'},
  {icon: 'local_shipping', name: 'Delivery Notes', formControlName: 'deliveryNotes'},
  {icon: 'credit_card', name: 'Credit Notes', formControlName: 'creditNotes'},
  {icon: 'border_color', name: 'Purchase Orders', formControlName: 'purchaseOrders'},
  {icon: 'import_contacts', name: 'Purchase Bill', formControlName: 'purchaseBill'},
  {icon: 'chrome_reader_mode', name: 'Job Cards', formControlName: 'jobCard'},
  {icon: 'add_shopping_cart', name: 'Stocks', formControlName: 'stocks'},
  {icon: 'assignment', name: 'Ledger', formControlName: 'ledger'},
  {icon: 'bookmarks', name: 'Estimates', formControlName: 'estimates'},
  {icon: 'attach_money', name: 'Expenses', formControlName: 'expenses'},
  {icon: 'public', name: 'Reports', formControlName: 'report'},
  {icon: 'settings', name: 'Preferences', formControlName: 'preferences'},
  {icon: 'chat', name: 'Help', formControlName: 'help'}
];
