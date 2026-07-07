import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Heading, Body, Eyebrow } from '../Typography/Typography';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

export default {
  title: 'UNLMTD/Card',
  tags: ['autodocs'],
};

export const Default = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <Eyebrow accent>Info Produto</Eyebrow>
        <Heading level={3}>Título do Card</Heading>
      </CardHeader>
      <CardBody>
        <Body muted size="sm">
          Aqui vai o conteúdo. Nada de texto motivacional genérico.
        </Body>
      </CardBody>
      <CardFooter>
        <Button variant="secondary" size="sm" fullWidth>Saiba mais</Button>
      </CardFooter>
    </Card>
  ),
};

export const CreamVariant = {
  render: () => (
    <Card variant="cream" className="w-80">
      <CardHeader>
        <Eyebrow>Segmento</Eyebrow>
        <Heading level={3} className="text-unlmtd-black">IA & Automação</Heading>
      </CardHeader>
      <CardBody>
        <Body className="text-neutral-600" size="sm">
          Quando mudamos o processo para melhorar o resultado — we CAN GO UNLMTD.
        </Body>
      </CardBody>
    </Card>
  ),
};
