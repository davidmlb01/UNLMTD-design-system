import { Badge } from './Badge';

export default {
  title: 'UNLMTD/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export const Default   = { args: { children: 'Hub',      variant: 'default'  } };
export const Premium   = { args: { children: 'Premium',  variant: 'premium'  } };
export const Danger    = { args: { children: 'Atenção',  variant: 'danger'   } };
export const Outline   = { args: { children: 'Novo',     variant: 'outline'  } };

export const AllVariants = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-8">
      <Badge variant="default">Hub</Badge>
      <Badge variant="premium">Premium</Badge>
      <Badge variant="danger">Atenção</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="new">Novo</Badge>
    </div>
  ),
};
