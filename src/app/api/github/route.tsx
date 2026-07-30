import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// função assincrona que faz uma requisição para a api do github e retorna os repositorios
export async function GET() {
  const username = process.env.GITHUB_USERNAME; //nome
  const token = process.env.GITHUB_TOKEN; //token

  console.log("API Route /api/github: GITHUB_USERNAME =", username);
  console.log("API Route /api/github: GITHUB_TOKEN exists =", !!token);

  if (!username) {
    console.error("API Route error: GITHUB_USERNAME environment variable is missing.");
    return NextResponse.json(
      { error: "GITHUB_USERNAME não configurado nas variáveis de ambiente." },
      { status: 500 }
    );
  }

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-app",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch( //requisição fetch que faz uma requisição para a api do github
      `https://api.github.com/search/repositories?q=user:${username}+topic:portfolio`,
      {
        headers,
        next: { //next valida a requisção
          revalidate: 3600,
        },
      }
    );

    console.log("API Route fetch status:", response.status);

    if (!response.ok) { //se a resposta retornar 500 ou não retornar nada
      const errorText = await response.text();
      console.error(`Erro da API do GitHub (${response.status}):`, errorText);
      throw new Error("Erro ao buscar repositórios");
    }

    const data = await response.json(); //converte a resposta para json

    if (!data.items) {
      console.error("Formato inesperado da API do GitHub: items ausente.", data);
      throw new Error("Resposta inválida da API do GitHub");
    }

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
    console.error("Erro interno no GET /api/github:", error);

    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 }
    );
  }
}