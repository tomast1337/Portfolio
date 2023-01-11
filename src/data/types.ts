export type FormacaoType = {
    "Tipo": string,
    "Instituição": string,
    "Curso": string,
    "Data": string,
}
export type ExperienciaType = {
    "Nome": string,
    "Empresa": string,
    "Data Início": string,
    "Data Fim": string,
    "Descrição": string,
}
export type CurriculoType = {
    "Nome": string,
    "Posição": string,
    "Local": string,
    "Resumo": string,
    "Formação": FormacaoType[],
    "Experiencia Profissional": ExperienciaType[],
    "Experiência Voluntária": ExperienciaType[],
    "Idiomas": string[],
    "Portfolio": string,
    "GitHub": string,
    "LinkedIn": string,
}

export type LaguagesType = "pt"| "en";