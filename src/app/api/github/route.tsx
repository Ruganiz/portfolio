import { NextResponse } from "next/server";
// função assincrona que faz uma requisição para a api do github e retorna os repositorios
export async function GET() {
  const username = process.env.GITHUB_USERNAME; //nome
  const token = process.env.GITHUB_TOKEN; //token

  try {
    const response = await fetch( //requisição fetch que faz uma requisição para a api do github
      `https://api.github.com/search/repositories?q=user:${username}+topic:portfolio`,
      {
        headers: { //"ouvidores" que fazem a requisição
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },

        next: { //next valida a requisção
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) { //se a resposta retornar 500 ou não retornar nada
      throw new Error("Erro ao buscar repositórios");
    }

    const data = await response.json(); //converte a resposta para json

    const projects = data.items.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics,
      stars: repo.stargazers_count,

      image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 }
    );
  }
}