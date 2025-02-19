const analista = ["admin", "coordenador", "supervisor", "analista"];
const supervisor = ["admin", "coordenador", "supervisor"];
const coordenador = ["admin", "coordenador"];
const admin = ["admin"];

export const permissions = {
    "/login": analista,
    "/empresas": analista,
    "/empresas/:id": analista,
    "/empresas/filiais": analista,
    "/empresas/create": supervisor,
    "/empresas/up/:id": supervisor,
    "/empresas/del/:id": supervisor,
    "/processos": analista,
    "/processos/:id": analista,
    "/processos/empresa/:id": analista,
    "/processos/usuario/:id": analista,
    "/processos/create": supervisor,
    "/processos/up/:id": supervisor,
    "/processos/del/:id": supervisor,
    "/usuarios": coordenador,
    "/usuarios/:id": coordenador,
    "usuarios/user/:user": coordenador,
    "usuarios/regra/:regra": coordenador,
};
