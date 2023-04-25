function calculo(){
    //Gastos com a casa
    var renda = window.document.getElementById('renda')
    var internet = window.document.getElementById('internet')
    var iptu = window.document.getElementById('iptu')
    var luz = window.document.getElementById('luz')
    var agua = window.document.getElementById('agua')
	var gas = window.document.getElementById('gas')
	var servicomensal = window.document.getElementById('servicomensal')
	var supermercado = window.document.getElementById('mercado')
	
    //Gastos com a casa
    var renda1 = Number(renda.value)
    var internet1 = Number(internet.value)
    var iptu1 = Number(iptu.value)
    var luz1 = Number(luz.value)
    var agua1 = Number(agua.value)
    var gas1 = Number(gas.value)
    var servicomensal1 = Number(servicomensal.value)
    var mercado1 = Number(mercado.value)
    var casa = internet1+iptu1+luz1+agua1+gas1+servicomensal1+mercado1
    var gastocasa = renda1-(internet1+iptu1+luz1+agua1+gas1+servicomensal1+mercado1)
    
    //Gastos com a saúde
    var veterinario = window.document.getElementById('veterinario')
    var remedio = window.document.getElementById('remedio')
    var medico = window.document.getElementById('medico')
    
    //Gastos com a saúde
    var veterinario1 = Number(veterinario.value)
    var remedio1 = Number(remedio.value)
    var medico1 = Number(medico.value)
    var saude = veterinario1+remedio1+medico1
    var gastosaude = renda1-(veterinario1+remedio1+medico1)
    
    //Gastos com transporte
    var transportepublico = window.document.getElementById('transportepublico')
    var transporteparticular = window.document.getElementById('transporteparticular')
    
    //Gastos com transporte
    var transportepublico1 = Number(transportepublico.value)
    var transporteparticular1 = Number(transporteparticular.value)
    var transporte = transportepublico1+transporteparticular1
    var gastotransporte = renda1-(transportepublico1+transporteparticular1)
	
	//Gastos com automovel
	var combustivel = window.document.getElementById('combustivel')
    var ipva = window.document.getElementById('ipva')
    var mecanico = window.document.getElementById('mecanico')
    var multa = window.document.getElementById('multa')
    
    //Gastos com automovel
    var combustivel1 = Number(combustivel.value)
    var ipva1 = Number(ipva.value)
    var mecanico1 = Number(mecanico.value)
    var multa1 = Number(multa.value)
    var automovel = combustivel1+ipva1+mecanico1+multa1
    var gastoautomovel = renda1-(combustivel1+ipva1+mecanico1+multa1)
	
    //Gasto com despesas pessoais
    var higiene = window.document.getElementById('higiene')
    var cabeleireiro = window.document.getElementById('cabeleireiro')
    var vestuario = window.document.getElementById('vestuario')
    var academia = window.document.getElementById('academia')
    var ajuda = window.document.getElementById('ajuda')
    
    //Gasto com despessas pessoais
    var higiene1 = Number(higiene.value)
    var cabeleireiro1 = Number(cabeleireiro.value)
    var vestuario1 = Number(vestuario.value)
    var academia1 = Number(academia.value)
    var ajuda1 = Number(ajuda.value)
    var dpessoais = higiene1+cabeleireiro1+vestuario1+academia1+ajuda1
    var gastodpessoais = renda1-(higiene1+cabeleireiro1+vestuario1+academia1+ajuda1)
    
    //Gasto com lazer
    var restaurante = window.document.getElementById('restaurante')
    var deposito = window.document.getElementById('deposito')
    var presente = window.document.getElementById('presente')
    var passeio = window.document.getElementById('passeio')
    var jogos = window.document.getElementById('jogos')
    var passagem = window.document.getElementById('passagem')
    var hotel = window.document.getElementById('hotel')
    
    //Gasto com lazer
    var restaurante1 = Number(restaurante.value)
    var deposito1 = Number(deposito.value)
    var presente1 = Number(presente.value)
    var passeio1 = Number(passeio.value)
    var jogos1 = Number(jogos.value)
    var passagem1 = Number(passagem.value)
    var hotel1 = Number(hotel.value)
    var lazer = restaurante1+deposito1+presente1+passeio1+jogos1+passagem1+hotel1
    var gastolazer = renda1-(restaurante1+deposito1+presente1+passeio1+jogos1+passagem1+hotel1)
    
    //Gasto com dependente
    var escola = window.document.getElementById('escola')
    var outros = window.document.getElementById('outros')
    
    //Gasto com dependente
    var escola1 = Number(escola.value)
    var outros1 = Number(outros.value)
    var dependente = escola1+outros1
    var gastodependente = renda1-(escola1+outros1)
    var gastos = casa+saude+transporte+automovel+dpessoais+lazer+dependente
    
    var resultado = renda1-(casa+saude+transporte+automovel+dpessoais+lazer+dependente)
    res.innerHTML = 'Lucro: '+resultado
    gasto.innerHTML = 'gastos: '+gastos
    
    if(casa>saude && casa>transporte && casa>automovel && casa>dpessoais && casa>lazer && casa>dependente){
		maior.innerHTML = 'Seu maior gasto foi com a casa no valor de '+casa
	}
	else if(saude>casa && saude>transporte && saude>automovel && saude>dpessoais && saude>lazer && saude>dependente){
		maior.innerHTML = 'Seu maior gasto foi com saude no valor de '+saude
	}
	else if(transporte>casa && transporte>saude && transporte>automovel && transporte>dpessoais && transporte>lazer && transporte>dependente){
		maior.innerHTML = 'Seu maior gasto foi com o transporte no valor de '+transporte
	}
	else if(automovel>casa && automovel>saude && automovel>transporte && automovel>dpessoais && automovel>lazer && automovel>dependente){
		maior.innerHTML = 'Seu maior gasto foi com o automovel no valor de '+automovel
	}
	else if(dpessoais>casa && dpessoais>saude && dpessoais>transporte && dpessoais>automovel && dpessoais>lazer && dpessoais>dependente){
		maior.innerHTML = 'Seu maior gasto foi com despesas pessoais no valor de '+dpessoais
	}
	else if(lazer>casa && lazer>saude && lazer>transporte && lazer>automovel && lazer>dpessoais && lazer>dependente){
		maior.innerHTML = 'Seu maior gasto foi com o lazer no valor de '+lazer
	}
	else if(dependente>casa && dependente>saude && dependente>transporte && dependente>automovel && dependente>dpessoais && dependente>lazer){
		maior.innerHTML = 'Seu maior gasto foi com dependentes no valor de '+dependente
	}
	else{
		maior.innerHTML = 'Não houve um maior gasto'
	}
}
