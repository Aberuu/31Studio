import { navigation } from '../../data/navigation';

const Navigation = () => {
  return (
    <nav>
      {navigation.map((item) => (
        <a key={item.name} href={item.href}>
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
