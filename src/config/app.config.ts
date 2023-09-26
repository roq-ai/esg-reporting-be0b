interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['ESG Manager'],
  customerRoles: ['Guest'],
  tenantRoles: ['Organization Owner', 'ESG Manager', 'Compliance Officer', 'Data Analyst', 'End Customer'],
  tenantName: 'Client',
  applicationName: 'ESG Reporting',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View client information'],
  ownerAbilities: [
    'Manage user information',
    'Manage client information',
    'Link users to clients',
    'Manage tenant data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/764a8d5d-da41-4f9b-9672-a40ae5c45ec3',
};
