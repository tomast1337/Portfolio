type Formacao = {
    "Tipo": string,
    "Instituição": string,
    "Curso": string,
    "Data": string,
}
type Experiencia = {
    "Nome": string,
    "Empresa": string,
    "Data Início": string,
    "Data Fim": string,
    "Descrição": string,
}
type Curriculo = {
    "Nome": string,
    "Posição": string,
    "Local": string,
    "Resumo": string,
    "Formação": Formacao[],
    "Experiencia Profissional": Experiencia[],
    "Experiência Voluntária": Experiencia[],
    "Idiomas": string[],
    "Portfolio": string,
    "GitHub": string,
    "LinkedIn": string,
} 

export { Formacao, Experiencia, Curriculo }