import { Display, Heading, Body, Label, Eyebrow } from './Typography';

export default {
  title: 'UNLMTD/Typography',
  tags: ['autodocs'],
};

export const Scale = {
  render: () => (
    <div className="p-8 space-y-6 max-w-3xl">
      <div>
        <Label>Display</Label>
        <Display size="7xl">GO UNLMTD</Display>
      </div>
      <div>
        <Label>Heading 1</Label>
        <Heading level={1}>Nossos Trabalhos</Heading>
      </div>
      <div>
        <Label>Heading 2</Label>
        <Heading level={2}>As Pessoas</Heading>
      </div>
      <div>
        <Label>Heading 3</Label>
        <Heading level={3}>Nosso Processo</Heading>
      </div>
      <div>
        <Label>Eyebrow + Heading</Label>
        <Eyebrow accent>Hub de Crescimento</Eyebrow>
        <Heading level={2}>Somos a UNLMTD</Heading>
      </div>
      <div>
        <Label>Body</Label>
        <Body>
          Aqui deveria entrar um texto daqueles sedutores. Mas isso é tão mais do mesmo, né?
        </Body>
      </div>
      <div>
        <Label>Body Muted</Label>
        <Body muted>Texto secundário com menos destaque, para informações de suporte.</Body>
      </div>
      <div>
        <Label className="block mb-2">Label</Label>
        <Label>COPYRIGHT 2025</Label>
      </div>
    </div>
  ),
};
