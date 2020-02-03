var limite_chars = 300;
var motivos = ["Dúvidas", "Informações", "Erros"];

var Registos;
var select_motivo;

function set_mensagens_erro()
{ 
    document.getElementById("nome").setCustomValidity('');
    document.getElementById("email").setCustomValidity('');
    document.getElementById("telefone").setCustomValidity('');
    document.getElementById("motivo").setCustomValidity('');
    document.getElementById("mensagem").setCustomValidity('');

	document.getElementById("mensagem").setAttribute("oninvalid", "setCustomValidity(\"Falta preencher este campo!\")");
	document.getElementById("nome").setAttribute("oninvalid", "setCustomValidity(\"Falta preencher este campo!\")");
	document.getElementById("motivo").setAttribute("oninvalid", "setCustomValidity(\"Falta preencher este campo!\")");
	document.getElementById("telefone").setAttribute("oninvalid", "setCustomValidity(\"O Contacto deve ter somente 9 dígitos!\")");

    if(document.getElementById("email").value == "")
        document.getElementById("email").setAttribute("oninvalid", "setCustomValidity(\"Falta preencher este campo!\")");
    else
        document.getElementById("email").setAttribute("oninvalid", "setCustomValidity(\"O seu email tem de conter um caracter @\")");
}

class form_contacto extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            nome: "",
            motivo: "",
            email: "",
            telefone: "",
            mensagem: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.submeter_formulario = this.submeter_formulario.bind(this);
        this.limpar_formulario = this.limpar_formulario.bind(this);
    }

    handleChange(event){
        switch(event.target.id)
        {
            case "nome":
                this.setState({nome: event.target.value});
                break;

            case "email":
                this.setState({email: event.target.value});
                break;

            case "motivo":
                this.setState({motivo: event.target.children[select_motivo.selectedIndex].textContent});
                break;

            case "telefone":
                this.setState({telefone: event.target.value});
                break;

            case "mensagem":
                this.setState({mensagem: event.target.value});
                break;
        }
    }

    submeter_formulario(){
        if (localStorage.hasOwnProperty("Dados_form_contacto_ant")) {
            Registos = JSON.parse(localStorage.getItem("Dados_form_contacto_ant"))
        }
        else
            Registos = new Array();

        var contacto = {
            nome: this.state.nome,
            motivo: this.state.motivo,
            email: this.state.email,
            telefone: this.state.telefone,
            mensagem: this.state.mensagem
        }
        Registos.push(contacto);
        localStorage.setItem("Dados_form_contacto_ant", JSON.stringify(Registos));
        alert("Mensagem recebida!\nIremos contactá-lo em breve");
    }

    limpar_formulario(){
        this.setState({
            nome: "",
            motivo: "",
            email: "",
            telefone: "",
            mensagem: ""
        });
    }

    render(){
        return (
            React.createElement("form", {id: "formulario_contacto", onSubmit: this.submeter_formulario}, [
                React.createElement("h2", {id: "titulo"}, "Contacte-nos"),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("input", {id: "nome", type: "text", required:"required", value: this.state.nome, onChange: this.handleChange, placeholder:"Nome"}, null)
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("input", {id: "email", type: "email", willvalidate: "true", required:"required", value: this.state.email, onChange: this.handleChange, placeholder:"Email"}, null)
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("input", {id: "telefone", pattern: "[0-9]{9}", maxLength: "9", type: "text", value: this.state.telefone, onChange: this.handleChange, placeholder:"Telefone(opcional)"}, null)
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("textarea", {id: "mensagem", maxLength: "" + limite_chars, required:"required", value: this.state.mensagem, onChange: this.handleChange, placeholder:"Escreva o seu problema(300)"}, null)
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("select", {id: "motivo", value: this.state.motivo, required:"required", onChange: this.handleChange}, [
                        React.createElement("option", {hidden:"hidden", value: ""}, "Selecione um motivo"),
                        motivos.map((aux) => { return React.createElement("option", {value: aux}, aux) })
                    ])
                ]),
                React.createElement("div", {className:"botoes"}, [
                    React.createElement("input", {type: "submit", value: "Submeter", onClick: set_mensagens_erro}, null),
                    React.createElement("input", {type: "reset", value: "Limpar", onClick: this.limpar_formulario}, null)
                ])
            ])
        );
    }
}

ReactDOM.render(React.createElement(form_contacto), document.getElementById("formulario_contacto_div"));

select_motivo = document.getElementById("motivo");