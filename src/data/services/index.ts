import { RichServiceData } from './types';
import { backupDisasterRecoveryService } from './backup-disaster-recovery';
import { cloudComputingService } from './cloud-computing';
import { dedicatedServersService } from './dedicated-servers';
import { enterpriseCloudBackupService } from './enterprise-cloud-backup';
import { gpuDedicatedServersService } from './gpu-dedicated-servers';
import { implementationSupportService } from './implementation-support';
import { instantTechnicalSupportService } from './instant-technical-support';
import { linuxDedicatedServersService } from './linux-dedicated-servers';
import { securityServicesService } from './security-services';
import { tallyOnCloudService } from './tally-on-cloud';
import { tsplusService } from './tsplus';
import { tsprintTsscanService } from './tsprint-tsscan';
import { videoStreamingServersService } from './video-streaming-servers';
import { windowsDedicatedServersService } from './windows-dedicated-servers';


export const services: RichServiceData[] = [
  backupDisasterRecoveryService,
  cloudComputingService,
  dedicatedServersService,
  enterpriseCloudBackupService,
  gpuDedicatedServersService,
  implementationSupportService,
  instantTechnicalSupportService,
  linuxDedicatedServersService,
  securityServicesService,
  tallyOnCloudService,
  tsplusService,
  tsprintTsscanService,
  videoStreamingServersService,
  windowsDedicatedServersService
];
