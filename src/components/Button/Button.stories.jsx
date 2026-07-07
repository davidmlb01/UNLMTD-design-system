import { Button } from './Button';

export default {
  title: 'UNLMTD/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'accent', 'danger', 'ghost'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Primary   = { args: { children: 'GO UNLMTD', variant: 'primary' } };
export const Secondary = { args: { children: 'Saiba mais', variant: 'secondary' } };
export const Accent    = { args: { children: 'Premium', variant: 'accent' } };
export const Danger    = { args: { children: 'Isso vai doer', variant: 'danger' } };
export const Ghost     = { args: { children: 'Talvez', variant: 'ghost' } };
export const Large     = { args: { children: 'GO UNLMTD', variant: 'primary', size: 'lg' } };
export const Disabled  = { args: { children: 'Não por agora', variant: 'primary', disabled: true } };

export const AllVariants = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      <Button variant="primary">GO UNLMTD</Button>
      <Button variant="secondary">Saiba mais</Button>
      <Button variant="accent">Premium</Button>
      <Button variant="danger">Isso vai doer</Button>
      <Button variant="ghost">Talvez</Button>
    </div>
  ),
};
