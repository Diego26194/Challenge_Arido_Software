import TextField from "@mui/material/TextField";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <TextField
      sx={{ backgroundColor: "#CCD5AE" }}
      label="Buscar publicación"
      variant="outlined"
      fullWidth
      margin="normal"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
