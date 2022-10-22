import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';

export const PenpalsComponent: React.VFC = () => (
  <div>
    <P>
      Pushing Envelopes PenPals
    </P>
    <InteractiveLink to="/penpals/two-deep?field1=foo&field2=bar#boom!">
      Example two deep with query and hash
    </InteractiveLink>
  </div>
);
