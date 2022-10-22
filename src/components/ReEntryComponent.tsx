import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';

export const ReEntryComponent: React.VFC = () => (
  <div>
    <P>
      ReEntry
    </P>
    <InteractiveLink to="/example/two-deep?field1=foo&field2=bar#boom!">
      Example two deep with query and hash
    </InteractiveLink>
  </div>
);
