export async function carregarDados() {
  try {

    const response = await fetch("/MyContactsFrontEnd/dados.json");

    if (!response.ok) {
      throw new Error(
        `Erro ao carregar dados. Status: ${response.status} (${response.statusText}).`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Falha ao buscar dados.json. Verifique o caminho /public/dados.json:",
      error
    );
    return [];
  }
}
