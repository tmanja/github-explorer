type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

export function RepositoryItem({ repository: repo }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repo.name}</strong>
      <p>{repo.description}</p>
      <a href={repo.html_url}>Acessar repositório</a>
    </li>
  );
}
