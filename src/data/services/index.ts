import { RichServiceData } from './types';
import { backupDisasterRecoveryService } from './backup-disaster-recovery';
import { cloudComputingService } from './cloud-computing';
import { dedicatedServersService } from './dedicated-servers';
import { enterpriseCloudBackupService } from './enterprise-cloud-backup';
import { implementationSupportService } from './implementation-support';
import { instantTechnicalSupportService } from './instant-technical-support';
import { linuxDedicatedServersService } from './linux-dedicated-servers';
import { securityServicesService } from './security-services';
import { tallyOnCloudService } from './tally-on-cloud';
import { tsplusService } from './tsplus';
import { tsprintTsscanService } from './tsprint-tsscan';
import { windowsDedicatedServersService } from './windows-dedicated-servers';

export const services: RichServiceData[] = [
  backupDisasterRecoveryService,
  cloudComputingService,
  dedicatedServersService,
  enterpriseCloudBackupService,
  implementationSupportService,
  instantTechnicalSupportService,
  linuxDedicatedServersService,
  securityServicesService,
  tallyOnCloudService,
  tsplusService,
  tsprintTsscanService,
  windowsDedicatedServersService
];
