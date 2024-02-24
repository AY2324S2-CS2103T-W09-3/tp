package seedu.address.model.person;

import static java.util.Objects.requireNonNull;

/**
 * Represents a Remark associated with a Person in the address book.
 */
public class Remark {
    public final String value;

    /**
     * Constructs an {@code remark}.
     *
     * @param remark A valid remark.
     */
    public Remark(String remark) {
        requireNonNull(remark);
        value = remark;
    }

    @Override
    public String toString() {
        return value;
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Remark)) {
            return false;
        }

        Remark otherremark = (Remark) other;
        return value.equals(otherremark.value);
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }
}
