### Orientação para Projeto Teste

1. Protótipo

   - Utilizei o Figma para criar o protótipo, partindo de um esboço enviado. O arquivo possui:
   - Wireframe: Estrutura inicial focada em navegação e hierarquia.
   - Três variações de alta fidelidade: Diferentes paletas de cores para explorar um layout reutilizável em diversos contextos.
   - A abordagem garantiu consistência visual e flexibilidade para aplicações futuras.

2. Desenvolvimento

   - Adotei Next.js pelo suporte a componentes reutilizáveis, ideal para aplicações One Page.
   - Estilização: Tailwind CSS para estilização ágil e responsiva.
   - Lógica: TypeScript para maior segurança e manutenção.
   - Mock de dados: Arquivo data.ts em /lib, permitindo alterações de cores e textos sem modificar o código.

3. SEO
   - Implementei estratégias para otimização:
   - Metadados: Tags de título, descrição e palavras-chave.
   - Imagens: Uso do next/image para carregamento rápido.
   - URLs limpas: Estruturas amigáveis para motores de busca.
   - Acessibilidade: Hierarquia de títulos e atributos alt nas imagens.
   - Testes no Google Lighthouse resultaram em nota 100 em SEO.

## Settings

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
