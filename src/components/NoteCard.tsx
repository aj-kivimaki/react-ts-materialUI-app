import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import type { Note } from "../routes/Notes";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note: Note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "money") {
        return green[500];
      }
      if (note.category === "todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

type NoteCardProps = {
  note: Note;
  handleDelete: (id: number) => void;
};

const NoteCard: React.FC<NoteCardProps> = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <Container>
      <Card elevation={1} /* className={classes.test} */>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NoteCard;
