import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-do-software',
  templateUrl: './manual-do-software.component.html',
  styleUrls: ['./manual-do-software.component.scss']
})

export class ManualDoSoftwareComponent implements OnInit {

  userHelpOptions: string[] = ['Erros', 'Cliente', 'Técnico', 'Chamados'];

  userHelpErrosSubOptions: string[] = ['Erro500', 'Erro409', 'Erro404', 'Erro403'];

  userHelpSuporteClienteSubOptions: string[] = ['Criar Cliente', 'Edição de Cliente', 'Informações de Cliente'];

  userHelpSuporteTecnicoSubOptions: string[] = ['Criar Técnico', 'Edição de Técnico', 'Informações de Técnico'];

  userHelpChamadosSubOptions: string[] = ['Criar Chamado', 'Edição de Chamado', 'Informações de Chamado'];

  userHelpSelect: boolean[] = [false, false, false, false]

  userHelpErrosSelect: boolean[] = [false, false, false, false]

  userHelpClienteSelect: boolean[] = [false, false, false]

  userHelpTecnicoSelect: boolean[] = [false, false, false]

  userHelpChamadosSelect: boolean[] = [false, false, false]

  constructor() { }

  onClick(option: String) {

    switch (option) {

      case "Erros":
        this.userHelpSelect = [true, false, false, false]
        break;

      case "Cliente":
        this.userHelpSelect = [false, true, false, false]
        break;

      case "Técnico":
        this.userHelpSelect = [false, false, true, false]

        break;

      case "Chamados":
        this.userHelpSelect = [false, false, false, true]
        break;
    }
  }

  onClick2(ErrosSubOptions: string) {

    switch (ErrosSubOptions) {

      case "Erro500":
        this.userHelpErrosSelect = [true, false, false, false]
        break;

      case "Erro409":
        this.userHelpErrosSelect = [false, true, false, false]
        break;

      case "Erro404":
        this.userHelpErrosSelect = [false, false, true, false]
        break;

      case "Erro403":
        this.userHelpErrosSelect = [false, false, false, true]
        break;
    }
  }

  onClick3(ClienteSubOptions: string) {

    switch (ClienteSubOptions) {

      case "Criar Cliente":
        this.userHelpClienteSelect = [true, false, false]
        break;

      case "Edição de Cliente":
        this.userHelpClienteSelect = [false, true, false]
        break;

      case "Informações de Cliente":
        this.userHelpClienteSelect = [false, false, true]
        break;
    }
  }

  onClick4(TecnicoSubOptions: string) {

    switch (TecnicoSubOptions) {

      case "Criar Técnico":
        this.userHelpTecnicoSelect = [true, false, false]
        break;

      case "Edição de Técnico":
        this.userHelpTecnicoSelect = [false, true, false]
        break;

      case "Informações de Técnico":
        this.userHelpTecnicoSelect = [false, false, true]
        break;
    }
  }

  onClick5(ChamadosSubOptions: string) {

    switch (ChamadosSubOptions) {

      case "Criar Chamado":
        this.userHelpChamadosSelect = [true, false, false]
        break;

      case "Edição de Chamado":
        this.userHelpChamadosSelect = [false, true, false]
        break;

      case "Informações de Chamado":
        this.userHelpChamadosSelect = [false, false, true]
        break;
    }
  }

  ngOnInit(): void {
  }
}
