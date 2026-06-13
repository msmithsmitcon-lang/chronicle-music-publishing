import "server-only";

export const portalPermissions = {
  workspaceRead: "workspace:read",
  workspaceManage: "workspace:manage",
  usersManage: "users:manage",
  rolesManage: "roles:manage",
  evidenceCreate: "evidence:create",
  evidenceReview: "evidence:review",
  auditRead: "audit:read",
  eventsRead: "events:read",
} as const;

export type PortalPermission = (typeof portalPermissions)[keyof typeof portalPermissions];

export const portalSystemRoles = {
  owner: "owner",
  admin: "admin",
  manager: "manager",
  contributor: "contributor",
  viewer: "viewer",
  externalCollaborator: "external_collaborator",
} as const;

export type PortalSystemRole = (typeof portalSystemRoles)[keyof typeof portalSystemRoles];

export function hasPortalPermission(
  grantedPermissions: Iterable<string>,
  requiredPermission: PortalPermission,
) {
  return new Set(grantedPermissions).has(requiredPermission);
}
