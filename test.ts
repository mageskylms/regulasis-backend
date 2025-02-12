import EmpresaService from "./src/services/EmpresaService";
import { Empresa } from "./src/types/Empresa";

const novaEmpresa: Empresa  = new Empresa( {
    id: 0, // Ou deixe o banco de dados gerar o ID
    nome: "Empresa Teste",
    nomeFantasia: "Teste Fantasia",
    cnpj: "12345678900000",
    setor: "TI",
    enderecoSede: "Rua Teste, 123",
    nomeResponsavel: "João Silva",
    contatoResponsavel: "11999998888",
    emailResponsavel: "joao.silva@", // Faltando o domínio
    observacoes: "", // Vazio
    tipo: "Matriz",
    idEmpresaSede: 1,
  }) ;

  try {
    EmpresaService.createEmpresa(novaEmpresa);
    console.log("Empresa criada com sucesso!");
  } catch (error) {
    alert("Erro ao criar nova empresa:" + error);
  }
