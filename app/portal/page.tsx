import { OwnerCommandCentre } from "@/components/portal/OwnerCommandCentre";
import { getOwnerCommandCentreIntelligence } from "@/lib/portal/command-centre/intelligence";

export const dynamic = "force-dynamic";

export default async function PortalPage() {
  const commandCentreData = await getOwnerCommandCentreIntelligence();

  return <OwnerCommandCentre data={commandCentreData} />;
}
