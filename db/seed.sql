INSERT INTO card_table(title) VALUES ('Todo');
INSERT INTO card_table(title) VALUES ('Task Completed');

INSERT INTO item_table(card_id, description, status_label) VALUES (1, 'Walk the cat', false);
INSERT INTO item_table(card_id, description, status_label) VALUES (1, 'Wash car', false); 
INSERT INTO item_table(card_id, description, status_label) VALUES (2, 'Sweep the floors', true);