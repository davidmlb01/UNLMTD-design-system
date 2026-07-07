import { InfinityMark } from './InfinityMark';

export default {
  title: 'UNLMTD/InfinityMark',
  component: InfinityMark,
  tags: ['autodocs'],
};

export const Default = { args: { size: 200, color: '#EDE8DC', strokeWidth: 2, lines: 4 } };
export const Champagne = { args: { size: 200, color: '#C4A45A', strokeWidth: 2, lines: 4 } };
export const Large = { args: { size: 400, color: '#EDE8DC', strokeWidth: 1.5, lines: 5 } };
export const Subtle = { args: { size: 120, color: '#EDE8DC', strokeWidth: 1, lines: 3 } };

export const OnCream = {
  render: () => (
    <div className="bg-unlmtd-cream p-16 flex items-center justify-center">
      <InfinityMark size={200} color="#0D0D0D" strokeWidth={2} lines={4} />
    </div>
  ),
};
