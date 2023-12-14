import PageFormat from "@/components/page-format/PageFormat";
import Permission from "@/identity/Permission";
import { UserPermissions } from "@/identity/identityScopes";

export default function RolesPage() {
  return (
    <PageFormat title="Roles | Sarbs" description="Roles Page">
      <div className="row">Roles Page</div>
      <Permission required={[UserPermissions.TEST_READ]} hasAll={false}>
        <button>TEST READ Button</button>
      </Permission>
      <Permission required={[UserPermissions.TEST_WRITE]} hasAll={false}>
        <button>TEST WRITE Button</button>
      </Permission>
      <Permission
        required={[UserPermissions.TEST_WRITE, UserPermissions.TEST_READ]}
        hasAll={false}
      >
        <button>TEST READ WRITE Button</button>
      </Permission>
    </PageFormat>
  );
}
